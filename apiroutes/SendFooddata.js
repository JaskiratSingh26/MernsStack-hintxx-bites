let express = require('express')
let router = express.Router()

let FoodItemModel=require('./CopyModel')

async function fetchFoodItems() {
    try {
        const foodItems = await FoodItemModel.find({}); // Fetch all documents from the collection
        return foodItems;
    } catch (error) {
        console.error('Error fetching food items:', error);
        throw error;
    }
}


router.post('/getfooddata', async (req, res) => {

    try {
        const foodItems = await fetchFoodItems(); // Call the function to fetch data
        res.json({ message: 'success', data: foodItems });




    } catch (error) {
        res.json({ message: 'error', err: error })

    }

    // res.send('milgyi')

})

module.exports=router

