require('dotenv').config()
const express= require('express')  


const app = express()

//const port =4000

app.get('/', (req,res)=>{
    res.send("Server is Ready..")
})

app.listen(process.env.PORT,()=>{
    console.log("Port set " + process.env.PORT)
})