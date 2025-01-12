const mongoose = require('mongoose');

const userSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: true
        },
        email: {
            type: String,
            required: true
        },
        password: {
            type: Number,
            required: true
        },
        cart: [
            {
                foodItem: {
                    type: mongoose.Schema.Types.ObjectId,
                    ref: 'FoodItem'
                },
                size: String,
                quantity: Number,
                totalPrice: String
            }
        ],
        role: {
            type: String,
            default: 'user'
        },
        myorder: [{
            foodItem: {
                type: mongoose.Schema.Types.ObjectId,
                ref: 'FoodItem'
            },
            size: String,
            quantity: Number,
            totalPrice: String,
            date: String 
        }]
    }, {
    timestamps: true
}
)

let users = mongoose.model('Users', userSchema)


module.exports = users