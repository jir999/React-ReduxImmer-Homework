import React from "react";
import isEqual from "lodash/isEqual";
import { useSelector } from "react-redux";
import Inputs from "./Inputs";
import { getColumn_1, getColumn_2 } from "../store/selectors";

const InputsList = () => {
  console.log("InputsList Rendered");
  const inputs1 = [];
  const inputs2 = [];

  const { column_1, column_2 } = useSelector(
    (state) => ({
      column_1: getColumn_1(state),
      column_2: getColumn_2(state)
    }),
    isEqual
  );

  for (let i = 0; i < column_1.length; i++) {
    inputs1.push(
      <Inputs
        key={column_1[i].id}
        name="Column 1"
        id={column_1[i].id}
        value={column_1[i].value}
      />
    );
  }

  for (let j = 0; j < column_2.length; j++) {
    inputs2.push(
      <Inputs
        key={column_2[j].id}
        name="Column 2"
        id={column_2[j].id}
        value={column_2[j].value}
      />
    );
  }

  return (
    <div className="lists">
      <div>{inputs1}</div>
      <div>{inputs2}</div>
    </div>
  );
};

export default InputsList;
