const express = require('express')

const router = express.Router()
const Users = require('../models/Usermodels')
const users = require('../models/Usermodels')


router.delete('/Emptycart/:user', async (req, res) => {
    try {
        let {user}=req.params
        console.log(user)
let userdoc=await Users.findOne({email:user})
console.log(userdoc)


userdoc.cart=[]

await userdoc.save()
res.json({message:'cart clean'})
    } catch (error) {
        res.json({ error: error, message: 'erro' })
    }


})





module.exports = router