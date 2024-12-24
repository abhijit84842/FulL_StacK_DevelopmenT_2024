import { dbStr } from "@/app/lib/connectionStr"
import { User } from "@/app/lib/model/userModel"
import mongoose from "mongoose"
import { NextResponse } from "next/server"


// POST API
export async function POST(req,res){
    let reqData =await req.json()
    const url = dbStr
    try{
        await mongoose.connect(url)
        console.log("Db connected..")
        let indUser = await User.findOne({name:reqData.name})
        if(indUser){
            return NextResponse.json({msg:"User are already exists.." , success:false})
        }else{
            let res = await User.create(reqData)
            return NextResponse.json({result:res , msg:"User added Successfully..." , success:true})
        }
      
    }catch(err){
        console.log("Not connected..")
    }
    
}