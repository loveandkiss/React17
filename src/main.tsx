import React from "react";
import ReactDOM from "react-dom";
import "./index.module.css";
import App from "./App";

// 为 React 提供 Redux Store
import store from './store'
import { Provider } from 'react-redux'

// ReactDOM.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
//   document.getElementById("root")
// );

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
