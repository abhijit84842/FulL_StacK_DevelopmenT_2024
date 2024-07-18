const { default: mongoose } = require("mongoose");

const userSchema = mongoose.Schema({
    name:String,
    age:String,
    email:String,
    password:String
})


module.exports= mongoose.model("users", userSchema)     // collection name and schema