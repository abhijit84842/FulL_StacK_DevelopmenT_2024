const express = require('express')
const path =require('path')

// import models
const userModel= require('./models/usermodel')
const { default: mongoose } = require('mongoose')


const app = express()

// json
app.use(express.json())
//url data
app.use(express.urlencoded({extended:true}))
// for static file
app.use(express.static(path.join(__dirname,"public")))

// set view engine
app.set("view engine" ,"ejs")

// connection Str
const url =
  "mongodb+srv://abhijitbackend:abhijit84842@cluster0.l4vqt9f.mongodb.net/MinorProjectDB?retryWrites=true&w=majority&appName=Cluster0";


app.get("/",(req,res)=>{
    res.render("index")
})

app.post("/create" ,async (req,res)=>{
    //mongodb connect
    try{
        await mongoose.connect()
    }catch(err){
        console.log("DB not connected")
    }
    const userData=await userModel.create({})
    res.send(userData)
})

app.listen(3000,()=>{
    console.log("PORT=> "+3000)
})