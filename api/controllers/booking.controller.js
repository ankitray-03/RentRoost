import instance from "../config/razorpay.config.js";
import crypto from "crypto";
import Payment from "../models/paymets.model.js";
import User from "../models/user.model.js";
import transporter from "../config/nodemailer.config.js";
import {
  tenantEmailTemplate,
  getLandlordEmailTemplate,
} from "../utils/EmailTemplate.js";

export const bookingCreateOrder = async (req, res) => {
  // creating order for the payment
  const options = {
    amount: req.body.amount * 100,
    currency: "INR",
    receipt: crypto.randomBytes(10).toString("hex"),
  };

  instance.orders.create(options, function (err, order) {
    if (err) {
      res.status(500).json({ message: "Internal server error" });
    }
    return res.status(200).json(order);
  });
};

export const bookingSuccess = async (req, res) => {
  const { razorpay_payment_id, razorpay_order_id, razorpay_signature } =
    req.body;

  // verify the signature
  const keySecret = process.env.RAZORPAY_API_SECRET;

  const generated_signature = crypto
    .createHmac("sha256", keySecret)
    .update(`${razorpay_order_id}|${razorpay_payment_id}`)
    .digest("hex");

  if (generated_signature !== razorpay_signature) {
    // redirect to invalid credentials page
    return res.status(400).json({ message: "Invalid signature" });
  }

  // save the payment details in the database
  const payment = new Payment(req.body);

  const landlord = await User.findById(payment.landlordId);

  const landlordEmail = landlord.email;
  const tenantEmail = payment.email;

  await payment
    .save()
    .then(() => {
      // send email to landlord
      const landloardMailOptions = {
        from: process.env.NODEMAILER_EMAIL,
        to: landlordEmail,
        subject: "Payment received",
        html: getLandlordEmailTemplate(
          landlord.username,
          tenantEmail,
          payment.amount
        ),
      };

      const tenantMailOptions = {
        from: process.env.NODEMAILER_EMAIL,
        to: tenantEmail,
        subject: "Payment successful",
        html: tenantEmailTemplate(
          payment.name,
          payment.razorpay_order_id,
          payment.razorpay_payment_id,
          payment.amount
        ),
      };

      // send email to landlord
      const mailres1 = transporter.sendMail(landloardMailOptions);

      // send email to tenant
      const mailres2 = transporter.sendMail(tenantMailOptions);

      return res.status(200).json(payment);
    })
    .catch((err) => {
      return res.status(500).json({ message: err });
    });
};
