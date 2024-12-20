import { NextResponse } from "next/server"

export async function GET(req,res){
    let apires = await fetch('https://dummyjson.com/users')
    let userData =await apires.json()
    return NextResponse.json({userData , success:true} , {status:200})
}