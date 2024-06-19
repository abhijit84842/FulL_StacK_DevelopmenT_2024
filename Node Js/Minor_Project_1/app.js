const express = require("express");
const path = require("path");
// import models
const userModel = require("./models/usermodel");
const { default: mongoose } = require("mongoose");

const app = express();

// json
app.use(express.json());
//url data
app.use(express.urlencoded({ extended: true }));
// for static file
app.use(express.static(path.join(__dirname, "public")));

// set view engine
app.set("view engine", "ejs");

// connection Str
const url =
  "mongodb+srv://abhijitbackend:abhijit84842@cluster0.l4vqt9f.mongodb.net/MinorProjectDB?retryWrites=true&w=majority&appName=Cluster0";

// renderin the home page
app.get("/", (req, res) => {
  res.render("index");
});

// rendering the registered page
app.get("/user/create", (req, res) => {
  res.render("registerd");
});

// POST API for User ac Create
app.post("/create", async (req, res) => {
  // console.log(req.body)
  let { username, name, email, password, age } = req.body;
  // mongodb connect
  try {
    await mongoose.connect(url);
  } catch (err) {
    console.log("DB not connected");
  }
  const userData = await userModel.create({
    username,
    name,
    email,
    password,
    age,
  });
  res.render("index");
});

app.listen(3000, () => {
  console.log("PORT=> " + 3000);
});
