import {
  ClientAPICreation,
  ClientAPIResponse,
  ClientAPIResponseParams,
} from "../types/clients";
import api from "./api";

const getClients = async (
  params?: ClientAPIResponseParams
): Promise<ClientAPIResponse[]> => {
  const { data } = await api.get<ClientAPIResponse[]>("/cliente", { params });

  return data;
};

const createClient = async (body: ClientAPICreation) => {
  const { data } = await api.post("/cliente", body);
};

export { getClients, createClient };
