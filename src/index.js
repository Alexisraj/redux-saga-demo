import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import BookContainer from "../src/containers/bookContainer";
import configureStore from "./configureStore";

const initialState = {};
const store = configureStore(initialState);

ReactDOM.render(
  <Provider store={store}>
    <BookContainer />
  </Provider>,
  document.getElementById("root")
);
