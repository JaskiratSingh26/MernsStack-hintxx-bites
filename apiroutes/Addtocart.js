const express = require('express')
const router = express.Router()
const FoodItem = require('./CopyModel')
const Users = require('../models/Usermodels')



router.post('/addToCart', async (req, res) => {

    const { userEamil, foodItemId, size, quantity, totalPrice } = req.body;
    const user = await Users.findOne({ email: userEamil });
    if (!user) {
        return res.status(404).json({ message: 'User  not found' });
    }

    let fooddatastoreindb={ foodItem: foodItemId,size, quantity, totalPrice }
    console.log('stroing this in db',fooddatastoreindb)
    const foodItem = await FoodItem.findById(foodItemId);
    if (!foodItem) {
        return res.status(404).json({ message: 'Food item not found' });
    }
    user.cart.push({ foodItem: foodItemId,size, quantity, totalPrice });
    
    await user.save();
    res.json({ message: 'Item added to cart' });



})


module.exports = router