let express = require('express')
let router = express.Router()
let app = express()
let Users = require('../models/Usermodels')
// let cors=require('cors')
// // app.use(cors())

router.post('/register', async (req, res) => {
    try {

        let { name, email, password } = req.body
        console.log(name, email, password)
        let UserExist = await Users.findOne({ email })
        if (UserExist) {
            res.send('Email is already in use plz use another one')
        }
        else {
            let newuser = new Users({
                name, email, password
            })
            await newuser.save()
            res.send('user register  done')
            res.status(200)
        }

    } catch (error) {
        console.log('error  while entering user data into data from register  routes ', error


        )

    }
})

module.exports = router