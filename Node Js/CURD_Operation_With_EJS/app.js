const express= require("express")

const path= require("path")

// common js import.. Model
const userModel= require("./models/usermodel")
const { default: mongoose } = require("mongoose")

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



// Create Operation
app.post("/create", async(req,res)=>{
    // console.log(req.body)

    let {name , email , age ,imageurl}=req.body           // destructing the data
    try{
        await mongoose.connect("mongodb+srv://abhijitbackend:abhijit84842@cluster0.l4vqt9f.mongodb.net/flipkartDB?retryWrites=true&w=majority&appName=Cluster0")
        console.log("Data base connected successfully..")
    }catch(err){
        console.log("DB not connected...")
    }

    const result= await userModel.create({
        name,
        email,
        age,
        imageurl
    })
    res.redirect("/")
})


// rendering the page
// Read Opeartion.....
app.get("/read",async (req,res)=>{
    try{
        await mongoose.connect("mongodb+srv://abhijitbackend:abhijit84842@cluster0.l4vqt9f.mongodb.net/flipkartDB?retryWrites=true&w=majority&appName=Cluster0")
        console.log("Database Connected successfully....")
    }catch(err){
        console.log("DB not connected...")
    }
    let userDetails=await userModel.find()
    res.render("read",{userDetails})
})


// DELETE Operation ..
app.get("/delete/:id", async (req,res)=>{
    // console.log(req.params.id)
    currentId= req.params.id
    try{
        await mongoose.connect("mongodb+srv://abhijitbackend:abhijit84842@cluster0.l4vqt9f.mongodb.net/flipkartDB?retryWrites=true&w=majority&appName=Cluster0")
        console.log("Database Connected successfully....")
    }catch(err){
        console.log("DB not connected...")
    }

    let delUser=await userModel.findOneAndDelete({_id:currentId})
    res.redirect("/read")

})

// PORT Number
app.listen(3000,()=>{
    console.log("Server is Running in POsrt => "+ 3000)
})