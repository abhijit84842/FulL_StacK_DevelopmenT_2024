


import { user } from "@/app/util/db";
import { NEXT_BODY_SUFFIX } from "next/dist/lib/constants";
import { NextResponse } from "next/server";

// GET request Specific Id basis
export function GET(request,response){
    // console.log(response.params.id)
    const data=user

    const userData= data.filter((item)=>item.id==response.params.id)
    return NextResponse.json(userData==0 ? {result: "No Data Found",success:false} : {result: userData[0] , success:true}
    ,{status:200}) // apply condition if userData is empty Array.
}


// PUT API REQUEST Specific Id basis => To update the data in DataBase
export async function PUT(req , res){
    let payload= await req.json()
    let userId=res.params.id

    payload.id=userId

    // console.log(payload)
    // console.log(userId)

    if(!payload.id || !payload.name || !payload.age || !payload.email){
        return NextResponse.json({
            return:"request data not vaild",
            success:false
        },{status:400})
    }else{
        return NextResponse.json({
            result:payload,
            success:true
        },{status:200})
    }

   
}


// DELETE Request on Specific id basis..
export function DELETE(request , response){
    // console.log(response.params.id)
    let userId = response.params.id
    if(userId){
        return NextResponse.json({result:"User Data Deleted " , success:true},{status:200})
    }else{
        return NextResponse.json({result:"Not Deleted...." , success:false},{status:400})
    }
  
}
