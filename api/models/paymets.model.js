import mongoose from "mongoose";

const paymentSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  razorpay_payment_id: {
    type: String,
    required: true,
  },
  razorpay_order_id: {
    type: String,
    required: true,
  },
  razorpay_signature: {
    type: String,
    required: true,
  },
  listingId: {
    type: String,
    required: true,
  },
  landlordId: {
    type: String,
    required: true,
  },
  amount: {
    type: Number,
    required: true,
  },
});

const Payment = mongoose.model("Payment", paymentSchema);

export default Payment;
