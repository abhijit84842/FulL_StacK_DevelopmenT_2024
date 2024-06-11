const express= require('express')

const app=express()

app.get("/",(req,res)=>{
    res.send("Server Started.....")
})

app.listen(3000 , ()=>{
    console.log(`App server is Running PORT=>${3000}`)
})