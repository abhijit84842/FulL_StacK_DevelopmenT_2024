import mongoose from "mongoose"


const productModel =new mongoose.Schema({
    name:String,
    company:String,
    price:String,
    colour:String,
})

export const ProductModel = mongoose.models.products || mongoose.model("products" , productModel)