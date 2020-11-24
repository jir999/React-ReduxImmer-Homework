export const radioBtnClick = "radioBtnClick";
export const inputChange = "inputChange";
export const switchBtnClick = "switchBtnClick";

export const handleRadioBtnClick = (radioBtnId) => ({
  type: radioBtnClick,
  radioBtnId
});

export const handleInputChange = (value, id) => ({
  type: inputChange,
  inputValue: value,
  inputId: id
});

export const handleSwitchClick = () => ({ type: switchBtnClick });
