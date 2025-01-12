const express=require('express')
const router=express.Router()
const Users=require('../models/Usermodels')



router.get('/user/:user',async(req,res)=>{
    let {user}=req.params
    let userdoc=await Users.findOne({email:user})
    res.json({message:'used data to order ',data:userdoc})
})

module.exports=router