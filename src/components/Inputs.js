import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { handleInputChange, handleRadioBtnClick } from "../store/actions";

const Inputs = ({ id, value, name }) => {
  const dispatch = useDispatch();

  useEffect(() => {
    console.log("Inputs Rendered");
    return () => console.log("Inputs unmount");
  }, []);

  return (
    <div>
      <input
        id={id}
        type="radio"
        defaultChecked={false}
        name={name}
        onChange={(e) => dispatch(handleRadioBtnClick(Number(e.target.id)))}
      />
      <input
        value={value}
        id={id}
        onChange={(e) =>
          dispatch(handleInputChange(e.target.value, Number(e.target.id)))
        }
      />
    </div>
  );
};

export default Inputs;
