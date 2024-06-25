const express = require("express");
const path = require("path");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const cookieParser = require("cookie-parser");

// import models
const userModel = require("./models/usermodel");
const { default: mongoose } = require("mongoose");
const postModel = require("./models/postmodel");

const app = express();

// json
app.use(express.json());
//url data
app.use(express.urlencoded({ extended: true }));
// for static file
app.use(express.static(path.join(__dirname, "public")));

// to see the cookie in backend
app.use(cookieParser());

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

app.get("/user/login", (req, res) => {
  res.render("login");
});

// POST API for User ac Create
app.post("/create", async (req, res) => {
  // console.log(req.body)
  let { username, name, email, password, age } = req.body;

  // password encryption
  bcrypt.genSalt(10, (err, salt) => {
    bcrypt.hash(password, salt, async (err, hash) => {
      // mongodb connect
      try {
        await mongoose.connect(url);
        console.log("DB connected Successfully");
      } catch (err) {
        console.log("DB not connected");
      }

      // check user exists or not in db basis on email id
      let user = await userModel.findOne({ email: email });
      if (user) {
        return res.status(500).send("user already registered");
      }

      const userData = await userModel.create({
        username,
        name,
        email,
        password: hash,
        age,
      });

      // jwt authentication.....
      const token = jwt.sign({ email: email, userid: userData._id }, "secret");
      res.cookie("token", token);
      res.send("Successfully Registerd..");
    });
  });

  //   res.render("index");
});

// Post API for User Login
app.post("/login", async (req, res) => {
  let { email, password } = req.body;
  // console.log(email , password)
  try {
    await mongoose.connect(url);
    console.log("db connected");
  } catch (err) {
    console.log("db not connected..");
  }
  let user = await userModel.findOne({ email: email });
  if (!user) {
    return res.status(500).send("Something went wrong...");
  }

  // if user found then check the password
  bcrypt.compare(password, user.password, (err, result) => {
    if (!result) {
      return res.status(500).send("something went wrong");
    }

    // if user found then set cookie again
    let token = jwt.sign(
      { email: user.email, userid: user._id },
      "secrectlogin"
    );
    res.cookie("token", token);

    res.redirect("/profile");
  });
});

// logout
app.get("/logout", (req, res) => {
  res.cookie("token", "");
  res.redirect("/");
});

// profile route(protected route)
app.get("/profile", isLoggedIn, async(req, res) => {
  // console.log(req.user1)
  try{
    await mongoose.connect(url)
  }catch(err){
    console.log(err.message)
  }
  let user= await userModel.findOne({email:req.user1.email}).populate("posts")      // popolate() => not showing post id show only post content
  // console.log(user)
    
  res.render("profile", {user});  // send user data in profile page
});



// Post Creation
app.post("/post", isLoggedIn,  async(req,res)=>{
  // console.log(req.user1)
  // console.log(req.body)

  let {content}= req.body

  
  try{
    await mongoose.connect(url)
    
  }catch(err){
    console.log("not connected")
  }
  let user =await userModel.findOne({email:req.user1.email})    // check user exists or not
  // console.log(user)
  
  let post=await postModel.create({
    user:user._id,
    content,
  })
  user.posts.push(post._id)   
  await user.save()

  // console.log(user.posts)
  
  res.redirect("/profile")
  res.render("profile" ,{user})
  // user.posts.push(post_.id)
})


// like Api Route
app.get("/like/:id", isLoggedIn,async (req,res)=>{
  // console.log(req.params.id)
  // console.log(req.user1.userid)
  try{
    await mongoose.connect(url)
  }catch(err){
    console.log("DB not connected...")
  }
  let post= await postModel.findOne({_id:req.params.id}).populate("user")
  // console.log(post)

  if(post.likes.indexOf(req.user1.userid)=== -1){
    post.likes.push(req.user1.userid)
  }else{
    post.likes.splice(post.likes.indexOf(req.user1.userid), 1)
  }
  
  await post.save()
  res.redirect("/profile")
})


// Edit Feature...GET Method
app.get("/edit/:id",async(req , res)=>{
  // console.log(req.params)
  try{
    await mongoose.connect(url)
  }
  catch(err){
    console.log("DB not connected")
  }
 let post=await postModel.findOne({_id:req.params.id}).populate("user")
//  console.log(post)
 res.render("update" , {post})
})




// middleware for protected route...
function isLoggedIn(req, res, next) {
  // console.log(req.cookies.token)
  if (req.cookies.token === "") {
    return res.status(500).redirect("/user/login");
  }
  let data = jwt.verify(req.cookies.token, "secrectlogin");
  // console.log(data)
  req.user1 = data;   // make a filed in req and add data.
  next();
}
app.listen(3000, () => {
  console.log("PORT=> " + 3000);
});
