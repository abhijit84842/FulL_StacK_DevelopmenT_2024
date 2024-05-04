import { Product } from "@/app/lib/model/product";
import mongoose from "mongoose";
import { NextResponse } from "next/server";

const url =
"mongodb+srv://mongodb:hhSkR0HjNOnHhJhJ@cluster0.cupwun4.mongodb.net/abhijitdb?retryWrites=true&w=majority&appName=Cluster0";
// GET Api method
export async function GET(request, response) {

    // Connect with DataBase using Mongoose

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




// POST API Method with mongodb
export async function POST(request,response){
    
   
    try{
        let payload= await request.json()       // received post request from user
        await mongoose.connect(url)
        console.log("POST - Connected Successfully")

        let product=new Product( payload)

        let result = await product.save()
        return NextResponse.json({result, success:true})
        
    }catch(error){
        console.log("POST- not connected")
    }

}