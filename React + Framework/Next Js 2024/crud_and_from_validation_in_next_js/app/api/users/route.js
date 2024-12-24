
import { User } from "@/app/lib/model/userModel";
import mongoose from "mongoose";
import { NextResponse } from "next/server";

const { dbStr } = require("@/app/lib/connectionStr");

let url = dbStr

export async function GET(req, res){
    try{
        await mongoose.connect(url)
        console.log("Database Connected Successfully...")
       let res =await User.find()
        return NextResponse.json({result: res , success:true})
    }catch(err){
        console.log("DB not connected..")
    }
}