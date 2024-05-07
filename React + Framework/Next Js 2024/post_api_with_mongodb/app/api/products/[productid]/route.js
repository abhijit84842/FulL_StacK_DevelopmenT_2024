import { Product } from "@/app/lib/model/product";
import mongoose from "mongoose";
import { NextResponse } from "next/server";

// Write PUT API code for single product update.
export async function PUT(request, response) {
  let productId = response.params.productid;
  //    console.log(id)
  const filter = { _id: productId };

  const payload = await request.json();
  //   console.log(payload)

  // connect with database
  const url =
    "mongodb+srv://abhijit:TqZX4zIeklDImdmb@cluster0.cupwun4.mongodb.net/abhijitdb?retryWrites=true&w=majority&appName=Cluster0";

  await mongoose.connect(url);
  const data = await Product.findOneAndUpdate(filter, payload);

  return NextResponse.json({ result: data, success: true });
}

// Write GET API code for single product details showing in form.

export async function GET(req, res) {
  let singleProId = res.params.productid;
  const recordId = { _id: singleProId };
  // console.log(recordId)

  // connect with database
  const url =
    "mongodb+srv://abhijit:TqZX4zIeklDImdmb@cluster0.cupwun4.mongodb.net/abhijitdb?retryWrites=true&w=majority&appName=Cluster0";
  await mongoose.connect(url);
  const data = await Product.findById(recordId);

  return NextResponse.json({ result: data, success: true });
}






// Write delete API code for single product details delete from database.
export async function DELETE(req, res) {
  const singleProId = res.params.productid;
  const recordId = { _id: singleProId };

  // connect with database
  const url =
    "mongodb+srv://abhijit:TqZX4zIeklDImdmb@cluster0.cupwun4.mongodb.net/abhijitdb?retryWrites=true&w=majority&appName=Cluster0";
  await mongoose.connect(url);
  const result=await Product.deleteOne(recordId)

  return NextResponse.json({ result, success: true });
}
