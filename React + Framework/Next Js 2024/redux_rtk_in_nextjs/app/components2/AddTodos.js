"use client";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { todoAction } from "../reduxtoolkit/slice2";

const AddTodos = () => {
  const [todoName, setTodoName] = useState("");

  const dispatch = useDispatch();

  const handleAdd = () => {
    // console.log(todoName);
    dispatch(todoAction.addTodos(todoName));
    setTodoName("")
  };
  return (
    <div className="addtodo-main">
      <h2>Add Todo Here..</h2>
      <input
        type="text"
        value={todoName}
        onChange={(event) => setTodoName(event.target.value)}
        placeholder="write your todo"
      />
      <button onClick={() => handleAdd()}>Add </button>
    </div>
  );
};

export default AddTodos;
