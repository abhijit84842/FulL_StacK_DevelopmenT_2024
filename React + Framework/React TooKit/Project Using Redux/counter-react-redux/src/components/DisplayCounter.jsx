import { useSelector } from "react-redux";

const DisplayCounter = () => {
  const counter = useSelector((store) => store.counter);

  return <p className="lead">Current Value of Counter is : {counter}</p>;
};

export default DisplayCounter;
