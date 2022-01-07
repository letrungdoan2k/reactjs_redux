import { createStore, combineReducers } from "redux";
import { dialogReducer } from "redux-dialog";
const reducers = {
  // Other reducers here
  dialogReducer
};
const reducer = combineReducers(reducers);
const store = createStore(reducer);