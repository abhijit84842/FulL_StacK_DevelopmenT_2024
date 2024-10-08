const express = require("express");

const userModel = require("./lib/model/usermodel");
const { default: mongoose } = require("mongoose");

const app = express();

app.get("/", (req, res) => {
  res.send("Server Started.....");
});

app.get("/create", async (req, res) => {
  try {
    await mongoose.connect(
      "mongodb+srv://abhijitbackend:abhijit84842@cluster0.l4vqt9f.mongodb.net/flipkartDB?retryWrites=true&w=majority&appName=Cluster0"
    );
    console.log("DB connected successfully....");
  } catch (err) {
    console.log("not connected....");
  }

  // CURD Operation => CREATE UPDATE READ DELETE

  // Create Operation....
  const data = await userModel.create({
    name: "Akashdip Paul",
    email: "akash524@gmail.com",
    age: "20",
  });
  res.send(data);
});

// Update Operation => model.findOneAndUpdate({_id or name etc} , {update} , {new:true})
app.get("/update", async (req, res) => {
  try {
    await mongoose.connect(
      "mongodb+srv://abhijitbackend:abhijit84842@cluster0.l4vqt9f.mongodb.net/flipkartDB?retryWrites=true&w=majority&appName=Cluster0"
    );
    console.log("DB connected successfully....");
  } catch (err) {
    console.log("not connected....");
  }
  const UpdateUser = await userModel.findOneAndUpdate(
    { email: "akash524@gmail.com" },
    { name: "Akashdip Mota" },
    { new: true }
  );

  res.send(UpdateUser);
});

// Read Operation

app.get("/read", async (req, res) => {
  try {
    await mongoose.connect(
      "mongodb+srv://abhijitbackend:abhijit84842@cluster0.l4vqt9f.mongodb.net/flipkartDB?retryWrites=true&w=majority&appName=Cluster0"
    );
    console.log("DB connected successfully....");
  } catch (err) {
    console.log("not connected....");
  }
  const users = await userModel.find(); // read all users...

  const singleUser = await userModel.findOne({ email: "ayanmuni74@gmail.com" }); // to read single user
  res.send(users);
  // res.send(singleUser);
});

// DELETE Opration => it have 3 method 1)findOneAndDelete() 2) deleteOne() 3)deleteMany()
app.get("/delete", async (req, res) => {
  try {
    await mongoose.connect(
      "mongodb+srv://abhijitbackend:abhijit84842@cluster0.l4vqt9f.mongodb.net/flipkartDB?retryWrites=true&w=majority&appName=Cluster0"
    );
    console.log("DB connected successfully....");
  } catch (err) {
    console.log("not connected....");
  }
// del a secific user
  const delUser = await userModel.findOneAndDelete(
    { name: "Akashdip Mota" },
    { acknowledged: true }
  );
  res.send(delUser);
});

app.listen(3000, () => {
  console.log(`App server is Running PORT=>${3000}`);
});
