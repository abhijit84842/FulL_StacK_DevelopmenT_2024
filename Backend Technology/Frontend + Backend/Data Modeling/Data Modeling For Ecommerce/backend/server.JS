require('dotenv').config()
const express=require('express')

const app=express()

//const port =4000

app.get("/",(req,res)=>{
    res.send("Server is start..")
})

app.listen(process.env.PORT,()=>{
    console.log(`app listening on port ${process.env.PORT}`)
})