const { default: mongoose } = require("mongoose");

const userModel = new mongoose.Schema({
    name:String,
    age:Number,
    email:String,
    phno:Number,
    city:String,
    company:String,

})

export const User = mongoose.models.users || mongoose.model("users",userModel) // table name and schema