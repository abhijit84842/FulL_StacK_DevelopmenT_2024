import { user } from "@/app/util/db";
import { NextResponse } from "next/server";


// data for all users
export function GET(request,response){
    const data=user
    return NextResponse.json(data,{status:200})
}


// POST method with API
export async function POST(request){
    let payload = await request.json()          // get data from user 
    console.log(payload.name)
    
    if(!payload.name || !payload.age || !payload.email){      
        return NextResponse.json({result:"require field not found"})
    }
    return NextResponse.json({result:"POST req Success.."})
}