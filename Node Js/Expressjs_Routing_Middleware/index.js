const express = require("express");

const app = express();

// create  Middleware.... 
app.use((req , res , next)=>{
    console.log("middleware running...")
    next()      // forword the request
})

// We can also create multiple middleware..
app.use((req , res , next)=>{
    console.log("2nd middleware running....")
    next()       // forword the request
})

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

// create a about route..
app.use("/about", (req , res , next)=>{
    return next(new Error("Something went wrong...Check it first"))         // this err will show in backend..
})


// express js error handler...
app.use((err , req , res , next)=>{
    console.error(err.stack)
    res.status(500).send("Something went wrong...")     // this err will show in frontend...
})

app.listen(3000 , ()=>{
    console.log("Port set => " +3000)
})
