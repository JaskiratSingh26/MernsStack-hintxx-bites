const express = require('express')
const router = express.Router()
const Users=require('../models/Usermodels')


router.get('/cart/:user', async (req, res) => {


const{user}=req.params


const userDoc = await Users.findOne({ email: user }).populate('cart.foodItem');
  
  if (!userDoc) {
    return res.status(404).json({ message: 'User  not found' });
  }
  res.json(userDoc.cart);



})
module.exports = router