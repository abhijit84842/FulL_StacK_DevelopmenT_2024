const express = require("express");

const app = express();

// create API Routes...
app.get("/", (req, res) => {
  res.send("Server is ready...");
});


// create API Routes...
app.get("/api/jokes", (req, res) => {
  const jokes = [
    {
      id: 1,
      title: "A jokes",
      constent: "This is jokes",
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
    {
        id: 6,
        title: "A jokes",
        content: " This is a jokes",
      },
  ];

  res.send(jokes)
});

app.listen(3000 , ()=>{
    console.log("Port set => " +3000)
})
