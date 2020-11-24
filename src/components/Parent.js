import React from "react";
import { useDispatch } from "react-redux";
import InputsList from "./InputsList";
import { handleSwitchClick } from "../store/actions";

const Parent = () => {
  console.log("Parent Rendered");
  const dispatch = useDispatch();

  return (
    <div>
      <InputsList />
      <button onClick={() => dispatch(handleSwitchClick())}>Switch</button>
    </div>
  );
};

export default Parent;
