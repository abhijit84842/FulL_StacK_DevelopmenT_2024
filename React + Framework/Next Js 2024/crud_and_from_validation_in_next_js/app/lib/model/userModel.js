const { default: mongoose } = require("mongoose");

const userSchema = new mongoose.Schema({
    name:String,
    age:Number,
    email:String,
    phno:Number,
    city:String,
    company:String,

})

export const User = mongoose.models || mongoose.model("users",userSchema) // table name and schema