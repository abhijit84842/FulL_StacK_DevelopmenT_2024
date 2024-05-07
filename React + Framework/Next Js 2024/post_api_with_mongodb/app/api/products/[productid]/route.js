import { Product } from "@/app/lib/model/product";
import mongoose from "mongoose";
import { NextResponse } from "next/server";

export async function PUT(request, response) {
  let productId = response.params.productid;
  //    console.log(id)
  const filter= {_id:productId}

  const payload = await request.json()
  console.log(payload)
  
  // connect with database
  const url =
"mongodb+srv://abhijit:TqZX4zIeklDImdmb@cluster0.cupwun4.mongodb.net/abhijitdb?retryWrites=true&w=majority&appName=Cluster0";

  await mongoose.connect(url)
  const data =await Product.findOneAndUpdate(filter , payload)

  return NextResponse.json({ result: data, success: true });
}