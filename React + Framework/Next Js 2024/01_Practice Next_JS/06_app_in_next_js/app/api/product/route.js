import { url } from "@/app/lib/connectionStr"
import { ProductModel } from "@/app/model/productModel"
import mongoose from "mongoose"
import { NextResponse } from "next/server"

const DbUrl= url

export async function GET(req,res){
    try{
        await mongoose.connect(DbUrl)
        console.log("Db connected Successfully..")

        let products= await ProductModel.find()
        // console.log(products)


        return NextResponse.json({rslt:products , success:true},{status:200})
    }catch(err){
        console.log("Db not Connected")
    }
}





/// POST REQUEST
export async function POST(req,res){
    let payload = await req.json()
    // console.log(payload)



    if(!payload.name || !payload.company || !payload.price || !payload.colour){
        return NextResponse.json({rslt:"Product not added" , success:false},{status:400})
    }else{
        try{
           await mongoose.connect(DbUrl)
           console.log("Db connected Successfully")

           let product= new ProductModel(payload)
        //    console.log(product)
           let res = await product.save()
        //    console.log(res)

          

           return NextResponse.json({rslt:res , success:true}, {status:201})

        }catch(err){
            console.log("DB NOT CONNECTED")
        }
        
    }

   
}