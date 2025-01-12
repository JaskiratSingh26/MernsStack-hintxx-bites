

const express = require('express');
const router = express.Router();
const Users = require('../models/Usermodels');
const FoodItem = require('../models/Fooditems');



// router.post('/myorder/:user', async (req, res) => {
//   const { user } = req.params;
//   // const userDoc = await Users.findOne({ email: user });
//   const userDoc = await Users.findOne({ email: user }).populate('myorder.foodItem');
//   if (userDoc) {
//     const session = await Users.startSession();
//     try {
//       await session.withTransaction(async () => {
//         userDoc.myorder = [...userDoc.myorder, ...userDoc.cart];
//         userDoc.cart = [];
//         await userDoc.save({ session });
//       });
//       await session.commitTransaction();
//       res.json({ message: 'Order updated successfully' ,data:userDoc.myorder});
//     } catch (error) {
    
//       res.status(500).json({ message: 'Error updating order' });
//     } finally {
//       await session.endSession();
//     }
//   } else {
//     res.status(404).json({ message: 'User  not found' });
//   }
// });



router.post('/myorder/:user', async (req, res) => {
  const { user } = req.params;
  const userDoc = await Users.findOne({ email: user }).populate('myorder.foodItem');
  if (userDoc) {
    const session = await Users.startSession();
    try {
      await session.withTransaction(async () => {
        const currentDate = new Date().toLocaleDateString(); // Get current date
        const newOrderItems = userDoc.cart.map((item) => ({
          foodItem: item.foodItem,
          size: item.size,
          quantity: item.quantity,
          totalPrice: item.totalPrice,
          date: currentDate
        }));
        userDoc.myorder = [...userDoc.myorder, ...newOrderItems];
        userDoc.cart = [];
        await userDoc.save({ session });
      });
      await session.commitTransaction();
      res.json({ message: 'Order updated successfully', data: userDoc.myorder });
    } catch (error) {
     
      res.status(500).json({ message: 'Error updating order' });
    } finally {
      await session.endSession();
    }
  } else {
    res.status(404).json({ message: 'User   not found' });
  }
});

module.exports = router;