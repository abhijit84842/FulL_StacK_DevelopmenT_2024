const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
  username: {
    type: String,
  },
  name: String,
  email: String,
  password: String,
  age: String,
  profilepic:{
    type:String,
    default:"default.jpg"
  },
  posts: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "post",
    },
  ],

});

module.exports = mongoose.model("user", userSchema);
