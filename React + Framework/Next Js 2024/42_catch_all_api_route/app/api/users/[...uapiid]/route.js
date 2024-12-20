


import { NextResponse } from "next/server"

export function GET(req,res){
  

    console.log(res.params.uapiid)
    return NextResponse.json({result:"catch all api route"})
}   