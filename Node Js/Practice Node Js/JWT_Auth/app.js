const express = require("express");
const path = require("path");

const cookieParser = require("cookie-parser");
const { default: mongoose } = require("mongoose");

const userModel = require("./models/usermodel");

const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const usermodel = require("./models/usermodel");

const app = express();

app.use(express.json());
app.use(express.urlencoded());

app.use(express.static(path.join(__dirname, "public")));

app.set("view engine", "ejs");

app.use(cookieParser());

const url =
  "mongodb+srv://practiceuser:admin123@cluster0.l4vqt9f.mongodb.net/PracticeDemo?retryWrites=true&w=majority&appName=Cluster0";

app.get("/", (req, res) => {
  res.render("index");
});

app.get("/login", (req, res) => {
  res.render("login");
});

app.get("/createuser", (req, res) => {
  res.render("createUser");
});

app.get("/products", (req, res) => {
  res.render("products");
});

app.post("/login/check", async(req, res) => {
  try{
    await mongoose.connect(url)
    console.log("connected..")
  }catch(err){
    console.log("not connected")
  }

  let user= await userModel.findOne({email:req.body.email})
  if(!user){
    return res.send("user not found..")
  }

  // Load hash from your password DB.
bcrypt.compare(req.body.password, user.password, function(err, result) {
  
  if(result){
    let token= jwt.sign({email:req.body.email} , "secrect")
    res.cookie("token" ,token)
    res.redirect("/products")
  }
  else{
    return res.send("incorrect password")
  }
});


});
app.post("/profilecreate", async (req, res) => {
  let { name, age, email, password } = req.body;
  try {
    await mongoose.connect(url);
    console.log("connected successfully..");
  } catch (err) {
    console.log("not connected..");
  }

  bcrypt.genSalt(12, function (err, salt) {
    bcrypt.hash(password, salt, async function (err, hash) {
      let result = await userModel.create({
        name,
        age,
        email,
        password: hash,
      });
    });
  });

  //jwt token set
  let token = jwt.sign({ email: email }, "secrect");
  res.cookie("token", token);
  res.redirect("/");
});

app.get("/logout", (req, res) => {
  res.cookie("token", "");
  res.send("logout");
});

app.listen(3000, () => {
  console.log("PORT=> " + 3000);
});
