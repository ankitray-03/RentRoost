export const tenantEmailTemplate = (
  customerName,
  orderId,
  paymentId,
  amount
) => {
  return `
    <html>
      <head>
        <style>
          .container {
            max-width: 600px;
            margin: auto;
            padding: 20px;
            font-family: Arial, sans-serif;
            background-color: #f9f9f9;
            border-radius: 10px;
            box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
          }
          .header {
            background-color: #007bff;
            color: white;
            padding: 15px;
            text-align: center;
            font-size: 24px;
            border-radius: 10px 10px 0 0;
          }
          .content {
            padding: 20px;
            font-size: 16px;
            color: #333;
          }
          .order-details {
            background-color: #fff;
            padding: 15px;
            border-radius: 5px;
            margin-top: 10px;
            box-shadow: 0 0 5px rgba(0, 0, 0, 0.1);
          }
          .footer {
            text-align: center;
            padding: 10px;
            font-size: 14px;
            color: #666;
            margin-top: 20px;
          }
        </style>
      </head>
      <body>
        <div class="container">
          <div class="header">Payment Confirmation</div>
          <div class="content">
            <p>Dear <strong>${customerName}</strong>,</p>
            <p>Thank you for your purchase! Below are your order details:</p>
            <div class="order-details">
              <p><strong>Order ID:</strong> ${orderId}</p>
              <p><strong>Payment ID:</strong> ${paymentId}</p>
              <p><strong>Amount Paid:</strong> ₹${amount}</p>
            </div>
            <p>If you have any questions, feel free to contact us.</p>
            <p>Best regards,<br><strong>RentRoost</strong></p>
          </div>
          <div class="footer">© ${new Date().getFullYear()} RentRoost. All Rights Reserved.</div>
        </div>
      </body>
    </html>
  `;
};

export const getLandlordEmailTemplate = (
  landlordName,
  payerEmail,
  amountPaid
) => {
  return `
    <html>
      <head>
        <style>
          .container {
            max-width: 600px;
            margin: auto;
            padding: 20px;
            font-family: Arial, sans-serif;
            background-color: #f9f9f9;
            border-radius: 10px;
            box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
          }
          .header {
            background-color: #28a745;
            color: white;
            padding: 15px;
            text-align: center;
            font-size: 24px;
            border-radius: 10px 10px 0 0;
          }
          .content {
            padding: 20px;
            font-size: 16px;
            color: #333;
          }
          .payment-details {
            background-color: #fff;
            padding: 15px;
            border-radius: 5px;
            margin-top: 10px;
            box-shadow: 0 0 5px rgba(0, 0, 0, 0.1);
          }
          .footer {
            text-align: center;
            padding: 10px;
            font-size: 14px;
            color: #666;
            margin-top: 20px;
          }
        </style>
      </head>
      <body>
        <div class="container">
          <div class="header">Rental Payment Confirmation</div>
          <div class="content">
            <p>Dear <strong>${landlordName}</strong>,</p>
            <p>You have received a rental payment. Here are the details:</p>
            <div class="payment-details">
              <p><strong>Payer Email:</strong> ${payerEmail}</p>
              <p><strong>Amount Paid:</strong> ₹${amountPaid}</p>
              <p><strong>Payment Date:</strong> ${new Date()}</p>
            </div>
            <p>Please verify the payment in your account. If you have any concerns, feel free to contact us.</p>
            <p>Best regards,<br><strong>RentRoost</strong></p>
          </div>
          <div class="footer">© ${new Date().getFullYear()}RentRoost. All Rights Reserved.</div>
        </div>
      </body>
    </html>
  `;
};
