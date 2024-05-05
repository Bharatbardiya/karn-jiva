import { combineReducers, applyMiddleware } from "redux";
import { configureStore } from "@reduxjs/toolkit";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import { authReducer } from "./reducers/userReducers";

const reducer = combineReducers({
	auth: authReducer
});

const store = configureStore({
	reducer,
	middleware: [thunk],
	devTools: composeWithDevTools(applyMiddleware(thunk)),
});

export default store;