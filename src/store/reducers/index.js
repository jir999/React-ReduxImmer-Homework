import { radioBtnClick, inputChange, switchBtnClick } from "../actions";
import defaultState from "./defaultState";
import produce from "immer";

const inputValueChange = (column, id, value) => {
  column.forEach((item) => {
    if (item.id === id) {
      item.value = value;
    }
    return item;
  });
  return column;
};

const radioBtnCheck = (column, id) => {
  column.forEach((item) => {
    if (item.id === id) {
      item.checked = true;
    }
    return item;
  });
  return column;
};

export default (state = defaultState, action) => {
  const { type, inputValue, inputId, radioBtnId } = action;
  return produce(state, (draftState) => {
    switch (type) {
      case inputChange:
        const inputColumn_1 = inputValueChange(
          draftState.column_1,
          inputId,
          inputValue
        );
        const inputColumn_2 = inputValueChange(
          draftState.column_2,
          inputId,
          inputValue
        );
        draftState.column_1 = inputColumn_1;
        draftState.column_2 = inputColumn_2;
        return draftState;

      case radioBtnClick:
        const radioColumn_1 = radioBtnCheck(draftState.column_1, radioBtnId);
        const radioColumn_2 = radioBtnCheck(draftState.column_2, radioBtnId);
        draftState.column_1 = radioColumn_1;
        draftState.column_2 = radioColumn_2;
        return draftState;

      case switchBtnClick:
        let item_1;
        let item_2;
        let id_1;
        let id_2;
        draftState.column_1.forEach((item, id) => {
          if (item.checked) {
            id_1 = id;
            item_1 = { ...item };
            item_1.checked = false;
          }
          return item;
        });
        id_1 && draftState.column_1.splice(id_1, 1);

        draftState.column_2.forEach((item, id) => {
          if (item.checked) {
            id_2 = id;
            item_2 = { ...item };
            item_2.checked = false;
          }
          return item;
        });
        id_2 && draftState.column_2.splice(id_2, 1);

        item_1 && draftState.column_2.push(item_1);
        item_2 && draftState.column_1.push(item_2);

        return draftState;

      default:
        return draftState;
    }
  });
};
