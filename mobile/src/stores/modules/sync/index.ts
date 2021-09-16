import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { DateTime } from "luxon";

import { AppThunk } from "../..";
import { createClients, fetchClients } from "../client";
import { createOrders, fetchOrders } from "../order";
import { fetchOtherInfo } from "../other";
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

type DataModule = "client" | "order" | "other" | "product";

interface SyncError {
  module: DataModule;
  error: "";
}

interface SyncState {
  status: SyncStatus;
  connectionStatus: ConnectionStatus;
  lastSync: string;
  error: string;
  // errors: SyncError[];
}

const initialState: SyncState = {
  status: SyncStatus.NotSynced,
  connectionStatus: ConnectionStatus.NotConnected,
  lastSync: "Nunca",
  error: "",
  // errors: [],
};

const syncSlice = createSlice({
  name: "sync",
  initialState,
  reducers: {
    syncStart: (state) => {
      state.status = SyncStatus.Syncing;
    },
    // syncSuccess: (state, action: PayloadAction<DataModule>) => {
    //   const { errors } = state;

    //   state.status = SyncStatus.Synced;
    //   state.lastSync = DateTime.fromISO(new Date().toISOString())
    //     .setLocale("pt-BR")
    //     .toFormat("dd/LL/yyyy 'às' HH:mm");
    //   state.errors = errors.filter((error) => error.module !== action.payload);
    // },
    syncSuccess: (state) => {
      state.status = SyncStatus.Synced;
      state.lastSync = DateTime.fromISO(new Date().toISOString())
        .setLocale("pt-BR")
        .toFormat("dd/LL/yyyy 'às' HH:mm");
    },
    // syncFailed: (state, action: PayloadAction<SyncError[]>) => {
    //   if (action.payload.length > 1) {
    //     state.errors = action.payload;
    //   } else {
    //     const error = action.payload[0];

    //     state.errors = [
    //       ...state.errors.filter((err) => err.module !== error.module),
    //       error,
    //     ];
    //   }

    //   state.status = SyncStatus.NotSynced;
    // },
    syncFailed: (state, action: PayloadAction<string>) => {
      state.status = SyncStatus.NotSynced;
      state.error = action.payload;
    },
    resetSync(state) {
      state = initialState;
    },
  },
});

const { syncStart, syncSuccess, syncFailed, resetSync } = syncSlice.actions;

const syncCreate = (userCode: string): AppThunk => async (dispatch) => {
  dispatch(syncStart());

  try {
    await Promise.all([
      dispatch(createClients()),
      dispatch(createOrders()),
      dispatch(fetchClients(userCode)),
      dispatch(fetchOrders(userCode)),
    ]);

    dispatch(syncSuccess());
  } catch (error) {
    console.log(error);

    dispatch(syncFailed(error.message));
  }
};

const syncFetchData = (userCode: string): AppThunk => async (dispatch) => {
  dispatch(syncStart());

  try {
    await Promise.all([
      dispatch(fetchClients(userCode)),
      dispatch(fetchOtherInfo()),
      dispatch(fetchProducts(userCode)),
      dispatch(fetchOrders(userCode)),
    ]);

    dispatch(syncSuccess());
  } catch (error) {
    console.log(error);

    dispatch(syncFailed(error.message));
  }
};

export { syncFetchData, syncCreate, resetSync };

export default syncSlice.reducer;
