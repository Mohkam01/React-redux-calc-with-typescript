import React from "react";
import Screen from "./components/Screen";
import { render } from "react-dom";
import { Provider } from "react-redux";
import store from "./components/redux-js/store/store";

render(
  <Provider store={store}>
    <Screen />
  </Provider>,
  document.getElementById("root")
);
