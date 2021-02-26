import { combineReducers } from "@reduxjs/toolkit";

import authReducer from "./auth";
import syncReducer from "./sync";
import clientReducer from "./client";
import orderReducer from "./order";
import productReducer from "./product";

export const rootReducer = combineReducers({
  auth: authReducer,
  sync: syncReducer,
  client: clientReducer,
  order: orderReducer,
  product: productReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
