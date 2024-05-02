import { NextResponse } from "next/server"

// for catch all Route API
export function GET(request,response){
    const studentDetails=response.params.students
    // console.log(studentDetails)
    // return new Response("All routes catched")
    return NextResponse.json({result:studentDetails},{status:200})
}