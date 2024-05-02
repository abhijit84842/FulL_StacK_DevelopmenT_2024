
// show indivisual data

import { user } from "@/app/util/db";
import { NextResponse } from "next/server";

export function GET(request,response){
    // console.log(response.params.id)
    const data=user

    const userData= data.filter((item)=>item.id==response.params.id)
    return NextResponse.json(userData==0 ? {result: "No Data Found",success:false} : {result: userData[0] , success:true}
    ,{status:200}) // apply condition if userData is empty Array.
}


// PUT API REQUEST => To update the data in DataBase
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