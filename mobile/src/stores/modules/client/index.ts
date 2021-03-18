import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { AppThunk } from "../..";

import { ClientAPIResponse } from "../../../types/clients";

import { getClients } from "../../../services/client";

interface ClientState {
  currentClient: ClientAPIResponse | null;
  clients: ClientAPIResponse[];
  newClients: ClientAPIResponse[];
  loading: boolean;
  error: string;
}

const initialState: ClientState = {
  currentClient: null,
  clients: [],
  newClients: [],
  loading: false,
  error: "",
};

const clientSlice = createSlice({
  name: "client",
  initialState,
  reducers: {
    getClientsStart: (state) => {
      state.loading = true;
      state.error = "";
    },
    getClientsSuccess: (state, action: PayloadAction<ClientAPIResponse[]>) => {
      state.loading = false;
      state.clients = action.payload;
    },
    getClientsFailed: (state, action: PayloadAction<string>) => {
      state.loading = false;
      state.error = action.payload;
    },
    addNewClient: (state, action: PayloadAction<ClientAPIResponse>) => {
      state.newClients.push(action.payload);
    },
    setCurrentClient: (state, action: PayloadAction<ClientAPIResponse>) => {
      state.currentClient = action.payload;
    },
    resetCurrentClient: (state) => {
      state.currentClient = null;
    },
    resetClient: (state) => {
      state = initialState;
    },
  },
});

const {
  getClientsStart,
  getClientsSuccess,
  getClientsFailed,
  addNewClient,
  setCurrentClient,
  resetCurrentClient,
  resetClient,
} = clientSlice.actions;

const fetchClients = (userCode: string): AppThunk => async (dispatch) => {
  dispatch(getClientsStart());

  try {
    const clients = await getClients({ codigoRepresentante: userCode });

    dispatch(getClientsSuccess(clients));

    return true;
  } catch (error) {
    dispatch(getClientsFailed(error.message));

    return true;
  }
};

export {
  fetchClients,
  addNewClient,
  setCurrentClient,
  resetCurrentClient,
  resetClient,
};

export default clientSlice.reducer;
