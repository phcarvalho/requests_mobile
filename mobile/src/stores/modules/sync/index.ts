import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { DateTime } from "luxon";

import { AppThunk } from "../..";
import { fetchClients } from "../client";
import { fetchOrders } from "../order";
import { fetchProducts } from "../product";

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
  error: string;
}

const initialState: SyncState = {
  status: SyncStatus.NotSynced,
  connectionStatus: ConnectionStatus.NotConnected,
  lastSync: "Nunca",
  error: "",
};

const syncSlice = createSlice({
  name: "sync",
  initialState,
  reducers: {
    syncStart: (state) => {
      state.status = SyncStatus.Syncing;
    },
    syncSuccess: (state) => {
      state.status = SyncStatus.Synced;
      state.lastSync = DateTime.fromISO(new Date().toISOString())
        .setLocale("pt-BR")
        .toFormat("dd/LL/yyyy 'às' HH:mm");
    },
    syncFailed: (state, action: PayloadAction<{ error: string }>) => {
      const { error } = action.payload;

      state.status = SyncStatus.NotSynced;
      state.error = error;
    },
    resetSync(state) {
      state = initialState;
    },
  },
});

const { syncStart, syncSuccess, syncFailed, resetSync } = syncSlice.actions;

const syncData = (userCode: string): AppThunk => async (dispatch) => {
  dispatch(syncStart());

  try {
    await Promise.all([
      dispatch(fetchProducts()),
      dispatch(fetchClients(userCode)),
      dispatch(fetchOrders(userCode)),
    ]);

    dispatch(syncSuccess());
  } catch (error) {
    dispatch(syncFailed(error.message));
  }
};

export { syncData, resetSync };

export default syncSlice.reducer;
