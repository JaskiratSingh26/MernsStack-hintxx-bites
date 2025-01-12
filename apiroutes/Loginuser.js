let express=require('express')
let router =express.Router()
let Users=require('../models/Usermodels')
let jwt=require('jsonwebtoken')
const users = require('../models/Usermodels')
const jwetsecertkey='prbhu'

router.post('/login',async(req,res)=>{
    try {
         
        let { name, email, password } = req.body
        console.log(email,password,'from first'
        )

    let UserExist= await Users.findOne({email})
    if(!UserExist){
        res.json('User does not exits,Create an acoount first')
        res.status(401)
    }

    else if(UserExist.password!=password){
        res.json('Incorrect password')
    }

    else{
    //   console.log(UserExist.id)
    let dataforjwt={
        id:UserExist.id
 
    }

    let token=jwt.sign(dataforjwt,jwetsecertkey)
        // res.json('user login')
        res.json({message:'user login',token})
        console.log("username",UserExist.name,'email',UserExist.email,'password',UserExist.password)
        res.status(200)
    
    }

        
    } catch (error) {
        console.log('login error in apiroites page ',error)
        
    }
})

module.exports=router