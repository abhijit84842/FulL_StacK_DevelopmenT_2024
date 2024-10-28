import React, { useMemo, useState } from "react";

const App = () => {
  const [number, setNumber] = useState(0);
  const [item, setItem] = useState(10);

  const multiCountMemo = useMemo(
    function multiCount() {
      console.warn("Multicount function called..");
      return number * 5;
    },
    [number] // when number will update then this function will be called not other other time
  );
  return (
    <div>
      <h1 className="text-3xl flex justify-center mt-20 ">
        useMemo Hooks Apply In Counter App
      </h1>

      <div className="border-2 border-red-500 flex justify-center  mt-20 mx-20 p-5 ">
        <div className="w-[50%]  flex justify-center items-center flex-col border-2 border-green-500 p-5">
          <p className="my-10">Counter Number is = {number}</p>
          {multiCountMemo}
          <button
            className="bg-red-500 p-2 mt-10 rounded-md"
            onClick={() => setNumber(number + 1)}
          >
            Counter
          </button>
          <p className="mt-5">Item Counter Number is = {item}</p>
          <button
            className="mt-10 bg-green-500 p-2 rounded-md"
            onClick={() => setItem(item * 10)}
          >
            Item Count
          </button>
        </div>
      </div>
    </div>
  );
};

export default App;
