import { useEffect, useState } from "react";
import "./App.css";
import axios from "axios";

function App() {
  const [jokes, setJokes] = useState([]);
  //console.log(jokes);

  useEffect(() => {
    axios.get("/api/jokes").then((res) => {
      //console.log(res);
      setJokes(res.data);
    });
  });
  return (
    <>
      <center>
        <h1>Abhijit Coding..// Das </h1>
        <p>JOKES: {jokes.length}</p>
        {jokes.map((list) => (
          <div key={list.id}>
            <h3>{list.title}</h3>
            <p>{list.content}</p>
          </div>
        ))}
      </center>
    </>
  );
}
export default App;
