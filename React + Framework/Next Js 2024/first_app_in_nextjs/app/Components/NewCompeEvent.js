import React from "react";

const NewCompeEvent = ({ onButton }) => {
  return (
    <div className="event-container">
      <div className="heading">
        <h1>This is Heading </h1>
      </div>
      <button onClick={onButton}>Success</button>
    </div>
  );
};

export default NewCompeEvent;
