import { Product } from "@/app/lib/model/product";
import mongoose from "mongoose";
import { NextResponse } from "next/server";

export async function GET(request, response) {

    // Connect with DataBase using Mongoose
  const url =
    "mongodb+srv://mongodb:hhSkR0HjNOnHhJhJ@cluster0.cupwun4.mongodb.net/abhijitdb?retryWrites=true&w=majority&appName=Cluster0";
    let data =[]
  try {
    await mongoose.connect(url);
    console.log("DATABASE Connected Successfully......");
    data = await Product.find();
    console.log(data);
  } catch (error) {
    console.log("not connected...");
  }

  return NextResponse.json({ result: data ,success:true});
}
