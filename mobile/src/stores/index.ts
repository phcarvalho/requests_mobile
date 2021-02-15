import { Action, configureStore, ThunkAction } from "@reduxjs/toolkit";
import { rootReducer, RootState } from "./modules/rootReducer";

const store = configureStore({
  reducer: rootReducer,
});

export type AppThunk = ThunkAction<void, RootState, unknown, Action<string>>;

export default store;
