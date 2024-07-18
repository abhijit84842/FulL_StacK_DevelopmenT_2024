
const express = require("express");
const path = require("path");

const cookieParser= require("cookie-parser")

const app = express();

app.use(express.json());
app.use(express.urlencoded());

app.use(express.static(path.join(__dirname, "public")));

app.set("view engine" , "ejs")

app.use(cookieParser())


app.get("/", (req, res) => {
  res.render("index");
});


app.get("/login",(req,res)=>{
    res.render("login")
})

app.get("/createuser",(req,res)=>{
    res.render("createUser")
})




app.post("/login/check",(req,res)=>{
    // console.log(req.body)
})
app.post("/profilecreate",(req,res)=>{
    console.log(req.body)
})




app.listen(3000, () => {
  console.log("PORT=> " + 3000);
});
