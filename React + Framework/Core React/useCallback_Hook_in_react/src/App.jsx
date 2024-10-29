import React, { useCallback, useState } from "react";
import NavBar from "./component/NavBar";

const App = () => {
  const [count, setCount] = useState(0);

  const [count2, setCount2] = useState(0);

  const [adjective, setAdjective] = useState("Good");

  // Freeze the function..
  const getAdjective = useCallback(() => {
    setAdjective("Best");
  }, []);

  // if we want to render this function basis on dependency array
  // const getAdjective = useCallback(() => {
  //   setAdjective("BEST " + count);
  // }, [count]);

  return (
    <div>
      <NavBar adjective={adjective} getAdjective={getAdjective} />
      <div>
        <p>Number = {count} </p>
        <div>
          <button onClick={() => setCount(count + 1)}>Increment</button>
        </div>
      </div>
    </div>
  );
};

export default App;

// here basically when app is rendering again and again for the update of count state that time our getAdjective function will be changed again and again for that new props passing to the NavBar componenet and in NavBar memo understand that new props comming so that memo will be render the NavBar component again and again.

// SOLUTION -> to stop this rendering we need to freeze the getAdjective function so that it will not change in every rendering time. Here we will we useCallback hooks to solve this problem.
