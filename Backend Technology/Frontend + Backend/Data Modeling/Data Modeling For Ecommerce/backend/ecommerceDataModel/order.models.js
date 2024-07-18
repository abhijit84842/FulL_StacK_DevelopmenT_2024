import mongoose from "mongoose";

// create a mini Schema
const oderItemsSchema = new mongoose.Schema({
    productId :{
        type: mongoose.Schema.Types.ObjectId,
        ref:"Product"
    },
    quantity:{
        type: Number,
        required: true
    }
})
const orderSchema = new mongoose.Schema({
    orderItems: {
        type: [oderItemsSchema]
    },
    orderPrice: {
        type : Number,
        required : true
    },
    customer:{
        type: mongoose.Schema.Types.ObjectId,
        ref: "User"
    },
    address:{
        type : String,
        required: true
    },
    status:{
        type: String,
        enum: ["PENDING" , "CANCELLED", "DELIVERED"],
        default: "PENDING"
    }

},{timeseries:true})

export  const Order = mongoose.model("Order" , orderSchema)