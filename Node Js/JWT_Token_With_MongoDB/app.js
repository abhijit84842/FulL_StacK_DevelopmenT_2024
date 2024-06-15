const express = require("express")
const path =require('path')
const cookieParser= require('cookie-parser')

const app =express()


// to read the json data comming from frontend
app.use(express.json())

// to read the form data comming from frontend
app.use(express.urlencoded({extended:true}))

// setup public file To use CSS , javascript etc file
app.use(express.static(path.join(__dirname , "public" )))


// set up view engine for server side rendering.....
app.set("view engine" , "ejs")

// to see the cookie str inbackend
app.use(cookieParser())



app.get("/",(req,res)=>{
    res.send("server running...")
})


app.listen(3000,()=>{
    console.log("Port number is => "+3000)
})