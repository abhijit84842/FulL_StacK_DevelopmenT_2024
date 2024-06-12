
const { default: mongoose } = require("mongoose");

const userSchema = mongoose.Schema({
    name:String,
    email:String,
    age:String
})

module.exports= mongoose.model("userdetails" , userSchema)   // collection name and Schema name