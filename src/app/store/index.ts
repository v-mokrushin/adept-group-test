import { combineReducers } from "redux";
import { configureStore } from "@reduxjs/toolkit";
import { companiesSlice } from "entities/company";

const rootReducer = combineReducers({
  companiesSlice: companiesSlice.reducer,
});

export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({ serializableCheck: false }),
  devTools: true,
});
