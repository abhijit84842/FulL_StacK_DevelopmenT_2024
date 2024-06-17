const express = require("express")
const path =require('path')
const cookieParser= require('cookie-parser')
const { default: mongoose } = require("mongoose")
const bcrypt= require('bcrypt')
const jwt=require("jsonwebtoken")

const UserModel= require("./models/userModel")

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

// connection str of MongoDB
const url="mongodb+srv://abhijitbackend:abhijit84842@cluster0.l4vqt9f.mongodb.net/JwtAuthDB?retryWrites=true&w=majority&appName=Cluster0"

//
app.get("/" , (req,res)=>{
    res.render("index")
})

app.post("/accreate" , (req,res)=>{  
    // console.log(req.body)
    const {name ,age ,email, password}= req.body
    

    // make salt to encrypte password
    bcrypt.genSalt(10, (err,salt)=>{
        bcrypt.hash(password, salt ,async(err, hash)=>{         // makeing hash
            // console.log(hash)

            try{
                await mongoose.connect(url)
                console.log("DB connected Successfully....")
            }catch(err){
                console.log("DB not connected....")
            }
        
            let result=await UserModel.create({name , age , email , password: hash })

            // set cookie in client web browser using jwt token
            const token=jwt.sign({email:email}, "secret")
            res.cookie("token" ,token)
            
            res.redirect("/")
        })
    })
    
    
})

//
app.get("/login", (req,res)=>{
    res.render("login")
})

// login and check Authantication 
app.post("/login" , (req,res)=>{
    res.render("login")
})

// logout by removing the token
app.get("/logout" , (req,res)=>{
    res.cookie("token" , "")        // blank the token value
    res.redirect("/")
})



app.listen(3000,()=>{
    console.log("Port number is => "+3000)
})