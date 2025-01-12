let express = require('express')
let app = express()
let dbconnection = require('./db')
let Users = require('./models/Usermodels')
let cross = require('cors')
app.use(express.json())
app.use(cross())

// for login and resgiter user
app.get('/',(req,res)=>{
    res.send('helo')
})

app.use('/api', require('./apiroutes/Registeruser'))
app.use('/api', require('./apiroutes/Loginuser'))

// for add fooditems in database
app.use('/api', require('./apiroutes/Addfoodroute'))

// for send footitems data to front-end as a array

app.use('/api', require('./apiroutes/SendFooddata'))


// for send single food data through id which we getting throgh request

app.use('/api', require('./apiroutes/ItemIdFetching'))



// for storing item to usr cart

app.use('/api', require('./apiroutes/Addtocart'))


// for getting cartitems from user cart collection
app.use('/api', require('./apiroutes/Usercart'))


// for deleteing cartitwms from user cart


app.use('/api', require('./apiroutes/Removecartitems'))


// for  empty the user cart
app.use('/api', require('./apiroutes/Emptycart'))

// for my order route

app.use('/api', require('./apiroutes/MyorderRoute'))

// for send user data to order file to display
app.use('/api',require('./apiroutes/Userdata'))


// for payment
app.use('/api',require('./apiroutes/Verifypayment'))

dbconnection()
app.listen(5000, () => {
    console.log('server is started ')
});
