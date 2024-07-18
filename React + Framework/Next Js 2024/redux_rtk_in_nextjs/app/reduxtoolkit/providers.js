"use client"
import { Provider } from "react-redux";
import { store } from "./store";

const Providers = ({ children }) => {

     //here we pass the store to availabe all access of store to all child component
  return <Provider store={store}>{children}</Provider>;    
};
export default Providers;
