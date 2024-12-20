import { url } from "@/app/lib/connectionStr";
import { ProductModel } from "@/app/model/productModel";
import mongoose from "mongoose";
import { NextResponse } from "next/server";

let DbUrl = url;

export async function GET(req, res) {
  let productId = res.params.productid;
  let singleProId = { _id: productId };
  // console.log(singleProId )

  try {
    await mongoose.connect(DbUrl);

    let res = await ProductModel.findOne(singleProId);
    // console.log(res)

    return NextResponse.json({ rslt: res, success: true });
  } catch (err) {
    console.log(err.message);
  }
}

// PUT REQUEST
export async function PUT(req, res) {
  let  id= res.params.productid;
  let singleUpdateId = {_id:id}

  let data = await req.json();

  try{
     await mongoose.connect(DbUrl)
     let res = await ProductModel.findOneAndUpdate(singleUpdateId , data)
     return NextResponse.json({rslt:res , success:true})
  }catch(err){
      console.log(err.message)
  }
}


// DELETE REQUEST
export async function DELETE(req,res){
  let id = res.params.productid
  let singleProDel= {_id:id}
  console.log(singleProDel)
  try{
    await mongoose.connect(DbUrl)
    let res = await ProductModel.findOneAndDelete(singleProDel)

    return NextResponse.json({rslt:res  , success:true})
  }catch(err){
     console.log(err.message)
  }
  
}