import { user } from "@/app/util/db";
import { NextResponse } from "next/server";

export function GET(request,response){
    // console.log(response.params.id)
    const data=user

    const userData= data.filter((item)=>item.id==response.params.id)
    return NextResponse.json(userData==0 ? {result: "No Data Found",success:false} : {result: userData , success:true}
    ,{status:200}) // apply condition if userData is empty Array.
}

// show indivisual data