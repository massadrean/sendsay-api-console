import React from "react";
import ReactDOM from "react-dom";
// import { BrowserRouter as Router } from "react-router-dom";
import { HashRouter } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./redux/store";
import "reset-css";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";

ReactDOM.render(
  <HashRouter basename="/">
    <Provider store={ store }>
      <App />
    </Provider>
  </HashRouter>,
  document.getElementById("root")
);

serviceWorker.unregister();
