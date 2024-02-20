import { useRef } from "react";
import { useDispatch } from "react-redux";

const Controls = () => {
  const dispatch = useDispatch();
  const addInputElement = useRef();
  const subInputElement = useRef();

  const handleIncrement = () => {
    dispatch({ type: "INCREMENT" });
  };

  const handleDecrement = () => {
    dispatch({ type: "DECREMENT" });
  };

  const handleAdd = () => {
    //console.log("click add");
    //console.log(addInputElement.current.value);
    dispatch({
      type: "ADD",
      payload: {
        num: addInputElement.current.value,
      },
    });
    addInputElement.current.value = "";
  };

  const handleSub = () => {
    console.log("click sub");
    dispatch({
      type: "SUB",
      payload: {
        num: subInputElement.current.value,
      },
    });

    subInputElement.current.value = "";
  };

  const handlePrivacyToggle = () => {
    dispatch({ type: "PRIVACY_TOGGLE" });
  };
  return (
    <div className>
      <div className="d-grid gap-2 d-md-flex justify-content-md-start">
        <button
          type="button"
          className="btn btn-primary btn-lg px-4 me-md-2"
          onClick={handleIncrement}
        >
          Increment
        </button>
        <button
          type="button"
          className="btn btn-outline-secondary btn-lg px-4"
          onClick={handleDecrement}
        >
          Decrement
        </button>
      </div>
      <div className="ad-privacy">
        <button
          type="button"
          className="btn btn-danger btn-lg px-4"
          onClick={handlePrivacyToggle}
        >
          Privacy
        </button>
      </div>

      <div className="d-grid gap-3 d-md-flex justify-content-md-start">
        <input
          type="text"
          ref={addInputElement}
          placeholder="Enter number here.."
        ></input>
        <button
          type="button"
          className="btn btn-success btn-lg px-4 me-md-2"
          onClick={handleAdd}
        >
          Add
        </button>
      </div>
      <div className="d-grid gap-3 d-md-flex justify-content-md-start">
        <input
          type="text"
          ref={subInputElement}
          placeholder="Enter number here..."
        ></input>
        <button
          type="button"
          className="btn btn-info btn-lg px-4"
          onClick={handleSub}
        >
          Sub
        </button>
      </div>
    </div>
  );
};
export default Controls;
