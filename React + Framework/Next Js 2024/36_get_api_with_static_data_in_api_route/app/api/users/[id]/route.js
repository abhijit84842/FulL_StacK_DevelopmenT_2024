import { user } from "@/app/util/db";
import { NextResponse } from "next/server";

export function GET(request,response){
    // console.log(response.params.id)
    const data=user

    const userData= data.filter((item)=>item.id==response.params.id)
    return NextResponse.json(userData,{status:200})
}

// show indivisual data