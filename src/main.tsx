import React from "react";
import ReactDOM from "react-dom";
import "./index.module.css";
import App from "./App";

// 为 React 提供 Redux Store
import store from "./store";
import { Provider } from "react-redux";

window.console.log("===window====");

// React17渲染方式
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
