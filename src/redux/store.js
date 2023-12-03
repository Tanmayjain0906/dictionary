import apiReducer from "./reducer/apiReducer";
import historyReducer from "./reducer/historyReducer";
import { createStore, combineReducers } from "redux";
import { applyMiddleware } from "redux";
import thunk from "redux-thunk";

const combine = combineReducers({apiReducer, historyReducer})

const store = createStore(combine, applyMiddleware(thunk));

export default store;