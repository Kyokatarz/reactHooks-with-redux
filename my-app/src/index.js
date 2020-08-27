import React from "react";
import ReactDOM from "react-dom";

import { createStore, combineReducers } from "redux";
import { Provider } from "react-redux";
import toDoListReducer from "./Reducers/toDoListReducer";
import httpStateReducer from "./Reducers/httpStateReducer";
import alertReducer from "./Reducers/alertReducer";
import { devToolsEnhancer } from "redux-devtools-extension";

import "./Css/index.css";
import App from "./App";

const rootReducer = combineReducers({
  tdl: toDoListReducer,
  http: httpStateReducer,
  alert: alertReducer,
});

const store = createStore(rootReducer, devToolsEnhancer());

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
