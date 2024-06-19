const mongoose = require('mongoose')

const userSchema = mongoose.Schema({
    username:{
        type:String
    },
    email:String,
    age:String,
    posts:[
        {
            type:mongoose.Schema.Types.ObjectId,
            ref: 'post'

        }
    ]
})

module.exports = mongoose.model("user" , userSchema)