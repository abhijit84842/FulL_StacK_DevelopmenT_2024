import React from "react";
import { memo } from "react";
const NavBar = ({ adjective, getAdjective }) => {
  console.log("Navabr is renderd..");
  return (
    <div>
      <div>
        <p>i am {adjective} Navbar</p>
      </div>
      <button onClick={getAdjective}>Change Adjective</button>
    </div>
  );
};

export default memo(NavBar);

// memo => only render when props will be change not other time.
