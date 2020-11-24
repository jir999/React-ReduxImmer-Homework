import { createStore } from "redux";
import reducer from "../store/reducers";
import defaultState from "./reducers/defaultState";

const store = createStore(reducer, defaultState);

export default store;
