const express = require('express')
const router = express.Router()
let mongoose = require('mongoose');
// let FoodItemModel=require('./SendFooddata').FoodItemModel
const FoodItemModel=require('./CopyModel')



async function fetchFoodItems(id) {
    try {
        const foodItems = await FoodItemModel.findById(id); // Fetch all documents from the collection
        return foodItems;
    } catch (error) {
        console.error('Error fetching food items:', error);
        throw error; 
    }
}




router.post(`/IdFecthing/:id`, async (req, res) => {
    const { id } = req.params;
console.log('id id',id)
    try {
        const foodItems = await  fetchFoodItems(id); // Fe
    
        res.json({ message: 'success  food by id ', data: foodItems });

   

     


    } catch (error) {
        res.json({ err: error, messgae: 'failed to due internal problem' })

    }
})


module.exports=router