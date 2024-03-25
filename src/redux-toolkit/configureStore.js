import { configureStore, combineReducers } from "@reduxjs/toolkit";
import counterSlice from "./counterSlice";
import globalSlice from "./globalSlice";

const reducer = combineReducers({
  counter: counterSlice,
});

const store = configureStore({
  reducer: {
    counter: counterSlice,
    global: globalSlice,
  },
});

export default store;
