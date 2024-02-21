require("dotenv").config();
const express = require("express");

const app = express();

//const port =4000

app.get("/", (req, res) => {
  res.send("Server is Ready..");
});

app.get("/jokes", (req, res) => {
  const jokes = [
    {
      id: 1,
      title: "A jokes",
      content: " This is a jokes",
    },
    {
        id: 2,
        title: "A jokes",
        content: " This is a jokes",
      },
      {
        id: 3,
        title: "A jokes",
        content: " This is a jokes",
      },
      {
        id: 4,
        title: "A jokes",
        content: " This is a jokes",
      },
      {
        id: 5,
        title: "A jokes",
        content: " This is a jokes",
      },
  ];

  res.send(jokes)
});

app.listen(process.env.PORT, () => {
  console.log("Port set " + process.env.PORT);
});
