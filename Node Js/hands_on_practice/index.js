const express = require("express");
const path = require("path");
const fs = require("fs");

const app = express();

// setup view engine....
app.set("view engine", "ejs");

// readable format
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//static file
app.use(express.static(path.join(__dirname, "public")));

app.get("/", (req, res) => {
  res.send("server is running...");
});

app.get("/about", (req, res) => {
  fs.readdir("./files", (err, files) => {
    //    console.log(files)

    // we can also send data as object in about page
    res.render("about", { files: files });
  });
});

// for post request...
app.post("/create" , (req ,res)=>{
  // console.log(req.body)

  // create file using fs module ****
  fs.writeFile(`./files/${req.body.title.split(' ').join(' ')}.txt` , req.body.details , (err)=>{
    // console.log(err.message)

    res.redirect("/about")
  })

})

app.listen(3000, () => {
  console.log("Port number is => " + 3000);
});
