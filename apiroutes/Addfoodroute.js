let express=require('express')
let router =express.Router()
let FoodItem=require('../models/Fooditems')

router.post('/addfood', async  (req, res) => {
    console.log(req.body)
    const foodItem = new FoodItem(req.body);
    await foodItem.save().then(()=>{
      console.log('food svaed')
      res.json({status:201})
    }).catch((err)=>{
      console.log(' err in saving food',err)
    })
  });
  
module.exports=router