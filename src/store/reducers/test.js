import { radioBtnClick, inputChange, switchBtnClick } from "../actions";
import defaultState from "./defaultState";
import produce from "immer";

const inputValueChange = (column, id, value) => {
  return column.map((item) => {
    if (item.id === id) {
      return { ...item, value };
    }
    return item;
  });
};

const radioBtnCheck = (column, id) => {
  return column.map((item) => {
    if (item.id === id) {
      return { ...item, checked: true };
    }
    return item;
  });
};

export const inputReducer = (state = defaultState, action) => {
  const { type, inputValue, inputId, radioBtnId } = action;
  switch (type) {
    case inputChange:
      const newColumn1 = inputValueChange(state.column_1, inputId, inputValue);
      const newColumn2 = inputValueChange(state.column_2, inputId, inputValue);
      return { ...state, column_1: newColumn1, column_2: newColumn2 };

    case radioBtnClick:
      const newChecked1 = radioBtnCheck(state.column_1, radioBtnId);
      const newChecked2 = radioBtnCheck(state.column_2, radioBtnId);
      return { ...state, column_1: newChecked1, column_2: newChecked2 };

    case switchBtnClick:
      let item_1;
      let item_2;
      const newColumn_1 = state.column_1.map((item) => {
        if (item.checked) {
          item_1 = { ...item };
          item_1.checked = false;
        }
        return { ...item };
      });
      const new_1 = newColumn_1.filter((item) => !item.checked);

      const newColumn_2 = state.column_2.map((item) => {
        if (item.checked) {
          item_2 = { ...item };
          item_2.checked = false;
        }
        return { ...item };
      });
      const new_2 = newColumn_2.filter((item) => !item.checked);

      if (item_1 && item_2) {
        new_2.push(item_1);
        new_1.push(item_2);
      } else if (!item_1) {
        new_1.push(item_2);
      } else if (!item_2) {
        new_2.push(item_1);
      }

      return { ...state, column_1: new_1, column_2: new_2 };
    default:
      return state;
  }
};
