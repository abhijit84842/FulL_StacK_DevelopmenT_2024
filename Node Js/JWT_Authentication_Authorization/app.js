const cookieParser = require("cookie-parser");
const express = require("express");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken")

const app = express();

// to read the cookie str in backend..
app.use(cookieParser());

app.get("/", (req, res) => {
  // set cookie in browser
  res.cookie("name", "abhijitcode");
  res.send("cookie set done..");
});

app.get("/read", (req, res) => {
  // console.log(req.cookies)    // to see the cookie which is comming from browser.
  res.send("hi");
});





app.get("/login", (req, res) => {
  // bcrypt => encryption
  bcrypt.genSalt(10, function (err, salt) {
    bcrypt.hash("adminAbhijit", salt, function (err, hash) {
      // Store hash in your password DB.
    //   console.log(hash)  // 2b$10$vwCCfB2bZsIcXZwwIKqkGOWydIjQaE7mpIQmsf60Us5IDiwogsC6m
    });
  });

  // to check password => check user enterd password is correct or not
  bcrypt.compare("adminAbhijit", "$2b$10$vwCCfB2bZsIcXZwwIKqkGOWydIjQaE7mpIQmsf60Us5IDiwogsC6m", function (err, result) {
    // result == true
    console.log(result)
  });
  res.send("working")

});



// JWT Token......
app.get("/jwt",(req,res)=>{
    let token=jwt.sign({email:"abhijit721201@gmail.com"}, "secret")     // "secret help to encrypted the email"
    // console.log(token)
    res.cookie("token" , token)
    res.send("Token set on browser..")
})

app.get("/signin", (req,res)=>{
    let data=jwt.verify(req.cookies.token, "secret")
    console.log(data)           // { email: 'abhijit721201@gmail.com', iat: 1718283134 }
    res.send("token decrypted")
})

app.listen(3000);
