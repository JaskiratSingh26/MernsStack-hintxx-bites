const express = require('express')
const router = express.Router()

const Users = require('../models/Usermodels')
router.delete('/removeFromCart/:user/:foodItemId', async (req, res) => {
    const { user, foodItemId } = req.params;

    try {
        console.log(user, foodItemId)
        const userDoc = await Users.findOne({ email:user })
        
    if (!userDoc) {
        return res.status(404).json({ message: 'User  not found' })
      }
  
      if (!userDoc.cart) {
        return res.status(404).json({ message: 'Cart not found' })
      }
  
        const updatedCart = userDoc.cart.filter((item) => item._id.toString() !== foodItemId)

        userDoc.cart = updatedCart

        await userDoc.save()

        res.json({ message: 'Item removed from cart' })
    } catch (error) {
        console.error(error)
        res.status(500).json({ message: 'Error removing item from cart' })
    }


})

module.exports = router

