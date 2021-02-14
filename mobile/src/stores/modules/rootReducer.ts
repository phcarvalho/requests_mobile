import { combineReducers } from "@reduxjs/toolkit";

import authReducer from "./auth";
import syncReducer from "./sync";

export const rootReducer = combineReducers({
  auth: authReducer,
  sync: syncReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
