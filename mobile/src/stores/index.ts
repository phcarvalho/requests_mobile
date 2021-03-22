import { Action, configureStore, ThunkAction } from "@reduxjs/toolkit";
import { rootReducer, RootState } from "./modules/rootReducer";
import thunk from "redux-thunk";

const store = configureStore({
  reducer: rootReducer,
  middleware: [thunk],
});

export type AppThunk = ThunkAction<void, RootState, unknown, Action<string>>;

export default store;
