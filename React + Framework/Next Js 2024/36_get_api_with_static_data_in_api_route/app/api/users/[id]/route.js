import { user } from "@/app/util/db";
import { NextResponse } from "next/server";

export function GET(request,response){
    const data=user
    return NextResponse.json(data,{status:200})
}

// show indivisual data