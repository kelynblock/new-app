import { configureStore } from "@reduxjs/toolkit";
import { combineReducers } from "redux";
import themeReducer from "../features/theme";

const rootReducer = combineReducers({
  theme: themeReducer,
});

export const store = configureStore({
  reducer: rootReducer,
});
