import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { AppThunk } from "../..";

import api from "../../../services/api";
import { AuthAPIResponse } from "../../../types/auth";

interface AuthState {
  isSigned: boolean;
  loading: boolean;
  error: string;
  user: AuthAPIResponse | null;
}

const initialState: AuthState = {
  isSigned: false,
  loading: false,
  error: "",
  user: null,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    authStart: (state) => {
      state.error = "";
      state.loading = true;
    },
    authSuccess: (state, action: PayloadAction<AuthAPIResponse>) => {
      state.user = action.payload;
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
    const { data } = await api.get<AuthAPIResponse[]>("/cadastro", {
      params: {
        login: userName,
        senha: password,
        tipoApp: 5,
      },
    });

    if (data.length > 0) {
      dispatch(authSuccess(data[0]));
    }

    throw Error;
  } catch (error) {
    dispatch(authFailed({ error: "Falha na autenticação" }));
  }
};

export { logout, login };

export default authSlice.reducer;
