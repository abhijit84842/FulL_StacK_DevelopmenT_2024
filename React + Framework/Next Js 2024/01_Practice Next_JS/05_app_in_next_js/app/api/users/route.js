import { users } from "@/app/util/DB";

const { NextResponse } = require("next/server");

export function GET(req,res){
    let data= users
    return NextResponse.json(data)
}



export async function POST(req,res){
    let payload= await req.json()
    if(!payload.name || !payload.age || !payload.city || !payload.email){
        return NextResponse.json({rslt:"require field not found" , success:false} , {status:400})
    }
    return NextResponse.json({rslt:"user added successfully" , success:true}, {status:201})
}