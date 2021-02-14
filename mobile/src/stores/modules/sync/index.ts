import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { DateTime } from "luxon";

export enum SyncStatus {
  Synced = "Sincronizado",
  NotSynced = "Não sincronizado",
  Syncing = "Sincronizando",
}

export enum ConnectionStatus {
  Connected = "Conectado",
  NotConnected = "Sem internet",
}

interface SyncState {
  status: SyncStatus;
  connectionStatus: ConnectionStatus;
  lastSync: string;
}

const initialState: SyncState = {
  status: SyncStatus.Syncing,
  connectionStatus: ConnectionStatus.NotConnected,
  lastSync: "Nunca",
};

const syncSlice = createSlice({
  name: "sync",
  initialState,
  reducers: {
    // setAuth(
    //   state,
    //   action: PayloadAction<{ userId: number; userName: string; token: string }>
    // ) {
    //   const { userId, userName, token } = action.payload;

    //   state.userId = userId;
    //   state.userName = userName;
    //   state.token = token;
    //   state.isSigned = true;
    // },
    resetSync(state) {
      state = initialState;
    },
  },
});

export const { resetSync } = syncSlice.actions;

export default syncSlice.reducer;
