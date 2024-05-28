const express = require('express')

const app = express()

// to read the json data comming from frontend
app.use(express.json())
// to read the form data comming from frontend
app.use(express.urlencoded({extended:true}))


// ejs setup and render the page
app.set('view engine' , 'ejs')

app.get("/" ,(req , res)=>{
    res.send("server is running....")
})

// create a another route..
app.get("/about" , (req , res)=>{
    res.render("about")
})


app.listen(3000 , ()=>{
    console.log("server is running on port => "+ 3000)
})