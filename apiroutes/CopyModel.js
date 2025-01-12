let mongoose = require('mongoose');
// Create a model for the `fooditems` collection without defining a schema

// Here we used an empty schema and set strict mode to false to allow the schema to adapt to all possible fields within your documents.

const FoodItemModel = mongoose.model('fooditems', new mongoose.Schema({}, { strict: false }), 'fooditems');


module.exports=FoodItemModel;