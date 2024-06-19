const mongoose = require('mongoose')

const userSchema = mongoose.Schema({
    username:String,
    name:String,
    age:String,
    posts:Array
})

module.exports = mongoose.model("user" , userSchema)