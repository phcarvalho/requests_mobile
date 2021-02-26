import { ClientAPIResponse } from "../types/clients";
import api from "./api";

const getClients = async (): Promise<ClientAPIResponse[]> => {
  const { data } = await api.get<ClientAPIResponse[]>("/cliente");

  return data;
};

export { getClients };
