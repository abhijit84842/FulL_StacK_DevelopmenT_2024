import { NextResponse } from "next/server";


// write POST API method to send the data
export async function POST(request,response){
    const data = await request.formData()
    

    return NextResponse.json({result: "hi" , success: true})
}