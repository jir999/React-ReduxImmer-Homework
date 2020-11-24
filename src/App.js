import React from "react";
import { Provider } from "react-redux";
import store from "./store";
import Parent from "./components/Parent";

import "./styles.css";

export default function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <Parent />
      </div>
    </Provider>
  );
}
