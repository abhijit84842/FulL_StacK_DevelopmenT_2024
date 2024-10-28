import React, { useState } from "react";

const App = () => {
  const initialValue = 0;
  const [number, setNumber] = useState(initialValue);

  const handleButton = (e) => {
    setNumber(number + 1);
  };
  return (
    <div>
      <h1 className="text-3xl flex justify-center mt-20 ">
        useMemo Hooks Apply In Counter App
      </h1>

      <div className="border-2 border-red-500 flex justify-center  mt-20 mx-20 p-5 ">
        <div className="w-[50%]  flex justify-center items-center flex-col border-2 border-green-500 p-5">
          <p>New Number is = {number}</p>
          <button
            className="bg-red-500 p-2 mt-10 rounded-md"
            onClick={handleButton}
          >
            Clicked Me
          </button>
        </div>
      </div>
    </div>
  );
};

export default App;
