import React from "react";
import ReactDOM from "react-dom";

import { createStore, combineReducers } from "redux";
import { Provider } from "react-redux";
import toDoListReducer from "./Reducers/toDoListReducer";
import httpStateReducer from "./Reducers/httpStateReducer";

import "./Css/index.css";
import App from "./App";

const rootReducer = combineReducers({
  tdl: toDoListReducer,
  http: httpStateReducer,
});

const store = createStore(rootReducer);

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
