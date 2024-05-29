const express = require('express')
const path= require('path')

const app = express()

// setup view engine....
app.set("view engine","ejs")

// readable format
app.use(express.json())
app.use(express.urlencoded({extended:true}))

//static file
app.use(express.static(path.join(__dirname,"public")))

app.get("/" , (req , res)=>{
    res.send("server is running...")
})

app.get("/about" ,(req,res)=>{
    res.render("about")
})


app.listen(3000,()=>{
    console.log("Port number is => "+3000)
})