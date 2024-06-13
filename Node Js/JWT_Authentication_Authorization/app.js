const cookieParser = require("cookie-parser");
const express = require("express");
const bcrypt = require("bcrypt");

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

app.listen(3000);
