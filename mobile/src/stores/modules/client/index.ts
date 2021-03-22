import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { AppThunk } from "../..";

import { ClientAPIResponse } from "../../../types/clients";

import { createClient, getClients } from "../../../services/client";

export interface ClientInterface extends ClientAPIResponse {
  isNew?: boolean;
  Representante?: string;
}
interface ClientState {
  currentClient: ClientInterface | null;
  clients: ClientInterface[];
  loading: boolean;
  error: string;
}

const initialState: ClientState = {
  currentClient: null,
  clients: [],
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
    getClientsSuccess: (state, action: PayloadAction<ClientInterface[]>) => {
      state.loading = false;

      const newClients: ClientInterface[] = state.clients.filter(
        (client) => client.isNew
      );

      state.clients = [...newClients, ...action.payload];
    },
    getClientsFailed: (state, action: PayloadAction<string>) => {
      state.loading = false;
      state.error = action.payload;
    },
    addNewClient: (state, action: PayloadAction<ClientInterface>) => {
      state.clients = [...state.clients, action.payload];
    },
    clearNewClients: (state) => {
      state.clients = state.clients.filter((client) => !client.isNew);
    },
    setCurrentClient: (state, action: PayloadAction<ClientInterface>) => {
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
  clearNewClients,
  setCurrentClient,
  resetCurrentClient,
  resetClient,
} = clientSlice.actions;

const fetchClients = (userCode: string): AppThunk => async (dispatch) => {
  dispatch(getClientsStart());

  try {
    const clients = await getClients({ codigoRepresentante: userCode });

    dispatch(getClientsSuccess(clients));
  } catch (error) {
    dispatch(getClientsFailed(error.message));

    throw Error("Error while fetching clients");
  }

  return true;
};

const createClients = (): AppThunk => async (dispatch, getState) => {
  const {
    client: { clients },
  } = getState();

  try {
    await Promise.all(
      clients
        .filter((client) => client.isNew)
        .map(async (client) => {
          await createClient(client);
        })
    );

    dispatch(clearNewClients());
  } catch (error) {
    throw Error("Error while creating new clients");
  }

  return true;
};

export {
  fetchClients,
  createClients,
  addNewClient,
  setCurrentClient,
  resetCurrentClient,
  resetClient,
};

export default clientSlice.reducer;
