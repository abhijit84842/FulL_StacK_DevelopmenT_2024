const cookieParser = require("cookie-parser")
const express= require("express")

const app= express()

// to read the cookie str in backend..
app.use(cookieParser())


app.get("/",(req,res)=>{
    // set cookie in browser
    res.cookie("name","abhijitcode")
    res.send("cookie set done..")
})


app.get("/read",(req,res)=>{

    // console.log(req.cookies)    // to see the cookie which is comming from browser.
    res.send("hi")
})


app.listen(3000)