import { user } from "@/app/util/db";
import { NextResponse } from "next/server";


// data for all users
export function GET(request,response){
    const data=user
    return NextResponse.json(data,{status:200})
}


// POST method with Static API
export async function POST(request){
    let payload = await request.json()          // get data from user 
    console.log(payload.name)
    
    if(!payload.name || !payload.age || !payload.email){      
        return NextResponse.json({result:"require field not found" , success: false},{status:400})
    }
    return NextResponse.json({result:"New user Created.. ",success:true},{status:201})
}