const express = require("express");

const userModel = require("./lib/model/usermodel");
const { default: mongoose } = require("mongoose");

const app = express();

app.get("/", (req, res) => {
  res.send("Server Started.....");
});


app.get("/create", async (req, res) => {

    try{
        await mongoose.connect("mongodb+srv://abhijitbackend:abhijit84842@cluster0.l4vqt9f.mongodb.net/flipkartDB?retryWrites=true&w=majority&appName=Cluster0")
        console.log("DB connected successfully....")
    }catch(err){
        console.log("not connected....")
    }

// CURD Operation => CREATE UPDATE READ DELETE 

// Create Operation....
  const data = await userModel.create({
    name: "Akashdip Paul",
    email: "akash524@gmail.com",
    age: "20",
  });

  

  res.send(data)
});

app.listen(3000, () => {
  console.log(`App server is Running PORT=>${3000}`);
});
