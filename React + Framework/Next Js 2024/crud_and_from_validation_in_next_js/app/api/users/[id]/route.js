import { dbStr } from "@/app/lib/connectionStr";
import { User } from "@/app/lib/model/userModel";
import mongoose from "mongoose";
import { NextResponse } from "next/server";


export async function GET(req,res){
    let usersId =await res.params.id 
    const url = dbStr
    try{
        await mongoose.connect(url)
        let res = await User.findOne({_id:usersId})
        return NextResponse.json({result: res , msg:"hh"})
    }catch(err){

    }
  
}

export async function PUT(req, res){
    let currId = res.params.id
        
    const url = dbStr
    let updateId = {_id:currId}
    console.log(updateId)
    let payload = await req.json()
    console.log(payload)


    try{
        await mongoose.connect(url)
        let res = await User.findOneAndUpdate(updateId , payload)
        return NextResponse.json({result:res , msg:"Data updated successfully.." , success:true})
    }catch(err){
        console.log("Db not connected..")
    }

}
  