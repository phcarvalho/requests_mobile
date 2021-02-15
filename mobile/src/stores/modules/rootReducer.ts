import { combineReducers } from "@reduxjs/toolkit";

import authReducer from "./auth";
import syncReducer from "./sync";
import clientReducer from "./client";

export const rootReducer = combineReducers({
  auth: authReducer,
  sync: syncReducer,
  client: clientReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
