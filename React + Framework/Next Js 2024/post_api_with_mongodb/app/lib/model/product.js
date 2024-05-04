// it's Schema File...

import mongoose from "mongoose";

const productModel =new mongoose.Schema({
    name:String,
    price:String,
    company:String,
    color:String,

})

export const Product =mongoose.models.products || mongoose.model("products",productModel)   // database name and model name