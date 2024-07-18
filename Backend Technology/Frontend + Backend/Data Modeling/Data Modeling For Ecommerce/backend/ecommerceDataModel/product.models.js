import mongoose from "mongoose";

const productSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    discription: {
      type: String,
      required: true,
    },
    productImage:{
        type: String     // use string beacuse we store image in cloud and here use use just url as string
    },
    price: {
        type: Number,
        default: 0
    },
    stock:{
        type: Number,
        default: 0
    },
    category: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Category",
        required:true
    },
    owner:{
        type: mongoose.Schema.Types.ObjectId,
        ref:"User"
    }

  },
  { timestamps: true }
);

export const Product = mongoose.model("Product", productSchema);
