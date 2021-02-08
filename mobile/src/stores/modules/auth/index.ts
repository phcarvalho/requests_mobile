import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface AuthState {
  userId: number | null;
  userName: string;
  token: string;
  isSigned: boolean;
}

const initialState: AuthState = {
  userId: null,
  userName: "",
  token: "",
  isSigned: false,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setAuth(
      state,
      action: PayloadAction<{ userId: number; userName: string; token: string }>
    ) {
      const { userId, userName, token } = action.payload;

      state.userId = userId;
      state.userName = userName;
      state.token = token;
      state.isSigned = true;
    },
    resetAuth(state) {
      state = initialState;
    },
  },
});

export const { setAuth, resetAuth } = authSlice.actions;

export default authSlice.reducer;
