require('dotenv').config()
const express = require('express')

const app = express()

app.get("/", (req,res)=>{
    res.send("Server is live now..")
})

app.listen(process.env.PORT,()=>{
    console.log(`app listening on port ${process.env.PORT}`)
})