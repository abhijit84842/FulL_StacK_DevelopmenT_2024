const express= require("express")

const app=express()

app.get("/", (req,res)=>{
    res.send("server is running...")
})


app.listen(3000,()=>{
    console.log("Server is Running in POsrt => "+ 3000)
})