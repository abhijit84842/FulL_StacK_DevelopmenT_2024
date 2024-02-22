import mongoose from "mongoose";

const categorySchema = new mongoose.Schema({
    name: {
        type: String,
        require: ture
    }
},{timestamps:ture})

export const Category = mongoose.model("Category" , categorySchema)