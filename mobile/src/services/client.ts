import { ClientInterface } from "../stores/modules/client";
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

const createClient = async (client: ClientInterface) => {
  const body: ClientAPICreation = {
    Bairro: client.Bairro,
    CEP: client.CEP,
    Celular: client.Celular,
    Cidade: client.Cidade,
    CnpjCpf: client.CnpjCpf,
    Complemento: client.Complemento,
    Email: client.Email,
    Email2: client.Email2,
    Endereco: client.Endereco,
    Estado: client.Estado,
    IeRG: client.IeRG,
    ListaDePreco: client.ListaDePreco,
    NomeFantasia: client.NomeFantasia,
    OutroTelefone: client.OutroTelefone,
    RazaoSocial: client.RazaoSocial,
    Regiao: client.Regiao,
    Representante: client.Representante ?? "",
    Telefone: client.Telefone,
    TipoDeCliente: client.TipoDeCliente,
    DataDeAbertura: client.DataDeAbertura,
  };

  const { data } = await api.post("/cliente", body);
};

export { getClients, createClient };
