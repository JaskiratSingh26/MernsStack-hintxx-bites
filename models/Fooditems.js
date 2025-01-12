const mongoose = require('mongoose');

const foodItemSchema = new mongoose.Schema({

    name: String,
    image: String,
    category: String,
    type:String,
    sizes: [
      {
        size: String,
        price: Number,
      },
    ],
  });
  
  const FoodItem = mongoose.model('FoodItem', foodItemSchema);
  module.exports=FoodItem