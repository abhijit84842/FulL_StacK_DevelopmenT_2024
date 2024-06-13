const express= require("express")

const app= express()

app.get("/",(req,res)=>{
    // set cookie in browser
    res.cookie("name","abhijitcode")
    res.send("cookie set done..")
})


app.get("/read",(req,res)=>{
    res.send("hi")
})


app.listen(3000)