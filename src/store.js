import { applyMiddleware, createStore } from "redux";
import taskReducer from "./reducers";
import { thunk } from "redux-thunk";

const store = createStore(taskReducer, applyMiddleware(thunk));

export default store;
