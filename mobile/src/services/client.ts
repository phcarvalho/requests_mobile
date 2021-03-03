import { ClientAPIResponse } from "../types/clients";
import api from "./api";

const getClients = async (params: {}): Promise<ClientAPIResponse[]> => {
  const { data } = await api.get<ClientAPIResponse[]>("/cliente", { params });

  return data;
};

export { getClients };
