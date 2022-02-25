import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import thunk from "redux-thunk";
import createSagaMiddleware from "redux-saga";
import { watcherSaga } from "./sagas";

const initialState = {
  counter: 0,
  posts: [],
  users: [],
};

function reducer(state = initialState, action) {
  switch (action.type) {
    case "INC":
      return { ...state, counter: state.counter + action.payload };
    case "DEC":
      return { ...state, counter: state.counter - action.payload };
    case "RESET":
      return initialState;
    case "GET_POSTS":
      return { ...state, posts: action.payload };
    case "GET_USERS":
      return { ...state, users: action.payload };
    default:
      return state;
  }
}
const saga = createSagaMiddleware();
const store = createStore(reducer, applyMiddleware(thunk, saga));
saga.run(watcherSaga);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
