"use client"
const Lectures =({params})=>{
    console.log(params)
    return <div>
        <h2>Lectures No : {params.lecture[0]} and {params.lecture[1]}</h2>
    </div>
}

export default Lectures