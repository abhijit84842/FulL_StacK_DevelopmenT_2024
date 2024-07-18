const express = require("express");
const path = require('path')  // core module of node js 

const app = express();

// to read the json data comming from frontend
app.use(express.json());
// to read the form data comming from frontend
app.use(express.urlencoded({ extended: true }));

// To use CSS , javascript etc file
app.use(express.static(path.join(__dirname, 'public')));

// ejs setup and render the page
app.set("view engine", "ejs");

app.get("/", (req, res) => {
  res.send("server is running....");
});

// use of Dynamic Routes => :
app.get("/profile/:username" , (req,res)=>{
  // console.log(req.params.username)
  const name= req.params.username
  res.send("Dynamic route is Running.."+ name)
  
})

// create a another route..
app.get("/about", (req, res) => {
  res.render("about");
});

app.listen(3000, () => {
  console.log("server is running on port => " + 3000);
});
