const mongoose = require('mongoose')

const userSchema= mongoose.Schema({
    username:{
        type:String
    },
    name:String,
    email:String,
    password:String,
    age:String,
})

module.exports = mongoose.model("user",userSchema)