const express = require('express');
const router = express.Router();
const Razorpay = require('razorpay');

const rzp = new Razorpay({
  key_id: 'rzp_test_H2MQ2uRU2sf7xl',
  key_secret: '2JDu9zXZbGk7rpLvBPxQ48Jm',
});

router.post('/verify-payment', async (req, res) => {
  const { razorpay_payment_id, razorpay_order_id, razorpay_signature } = req.body;

  const generatedSignature = rzp.generateSignature({
    order_id: razorpay_order_id,
    payment_id: razorpay_payment_id,
  });

  if (generatedSignature !== razorpay_signature) {
    return res.status(400).json({ error: 'Invalid signature' });
  }

  // Payment is valid, update your database
  res.json({ message: 'Payment successful' });
});

module.exports = router;