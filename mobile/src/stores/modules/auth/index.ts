import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { AppThunk } from "../..";

import api from "../../../services/api";

interface AuthState {
  userId: number | null;
  userName: string;
  token: string;
  isSigned: boolean;
  error: string;
  loading: boolean;
}

const initialState: AuthState = {
  userId: null,
  userName: "",
  token: "",
  isSigned: false,
  error: "",
  loading: false,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    authStart: (state) => {
      state.loading = true;
    },
    authSuccess: (
      state,
      action: PayloadAction<{ userId: number; userName: string; token: string }>
    ) => {
      const { userId, userName, token } = action.payload;

      state.userId = userId;
      state.userName = userName;
      state.token = token;
      state.isSigned = true;
      state.error = "";
      state.loading = false;
    },
    authFailed: (state, action: PayloadAction<{ error: string }>) => {
      const { error } = action.payload;

      state.error = error;
      state.loading = false;
    },
    logout: (state) => {
      state = initialState;
    },
  },
});

const { authStart, authSuccess, authFailed, logout } = authSlice.actions;

const login = (userName: string, password: string): AppThunk => async (
  dispatch
) => {
  dispatch(authStart());

  try {
    // const { data } = await api.post("/login", { userName, password });

    await new Promise((resolve) => setTimeout(resolve, 2000));

    dispatch(authSuccess({ userId: 123, userName, token: "123" }));
  } catch (error) {
    dispatch(authFailed(error));
  }
};

export { logout, login };

export default authSlice.reducer;
