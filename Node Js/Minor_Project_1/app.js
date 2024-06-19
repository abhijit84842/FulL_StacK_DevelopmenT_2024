const express = require('express')
const path =require('path')

// import models
const userModel= require('./models/usermodel')


const app = express()

// json
app.use(express.json())
//url data
app.use(express.urlencoded({extended:true}))
// for static file
app.use(express.static(path.join(__dirname,"public")))

// set view engine
app.set("view engine" ,"ejs")


app.get("/",(req,res)=>{
    res.render("index")
})

app.listen(3000,()=>{
    console.log("PORT=> "+3000)
})