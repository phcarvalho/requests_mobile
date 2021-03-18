export type ClientType = "Jurídica" | "Física";
export interface ClientAPIResponse {
  CodigoDoCliente: string;
  TipoDeCliente: ClientType;
  RazaoSocial: string;
  NomeFantasia: string;
  CnpjCpf: string;
  IeRG: string;
  DataDeAbertura: string;
  ListaDePreco: string;
  Regiao: string;
  Endereco: string;
  Bairro: string;
  Complemento: string;
  CEP: string;
  Cidade: string;
  Estado: string;
  Telefone: string;
  OutroTelefone: string;
  Celular: string;
  Email: string;
  Email2: string;
}

export interface ClientAPIResponseParams {
  codigoRepresentante?: string;
}

export interface ClientAPICreation {
  RazaoSocial: string;
  NomeFantasia: string;
  CnpjCpf: string;
  IeRG: string;
  TipoDeCliente: ClientType;
  ListaDePreco: string;
  Regiao: string;
  Endereco: string;
  Bairro: string;
  Complemento: string;
  CEP: string;
  Cidade: string;
  Estado: string;
  Telefone: string;
  OutroTelefone: string;
  Celular: string;
  Email: string;
  Email2: string;
  Representante: string;
}
