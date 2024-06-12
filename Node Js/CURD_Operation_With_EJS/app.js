const express= require("express")

const path= require("path")

const app=express()

// to read the json data comming from frontend
app.use(express.json())

// to read the form data comming from frontend
app.use(express.urlencoded({extended:true}))

// setup public file To use CSS , javascript etc file
app.use(express.static(path.join(__dirname, "public")))

// set view engine
app.set("view engine" , "ejs")


// rendering the page
app.get("/", (req,res)=>{
    res.render("index")
})

// rendering the page
app.get("/read", (req,res)=>{
    res.render("read")
})


// PORT Number
app.listen(3000,()=>{
    console.log("Server is Running in POsrt => "+ 3000)
})