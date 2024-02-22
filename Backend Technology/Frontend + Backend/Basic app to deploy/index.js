require('dotenv').config()
const express= require('express')   // common js import 

const app =express()

//const port=4000

app.get('/', (req , res)=>{
    res.send("hello world")
})

app.get('/hello', (req , res)=>{
    res.send("hello world 1")
})


app.get('/login', (req,res)=>{
    res.send('<h1>This is Server</h1>')
})
app.listen(process.env.PORT,()=>{
    console.log(`app listening on port ${process.env.PORT}`)
})