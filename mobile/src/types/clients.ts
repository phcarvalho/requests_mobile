export interface ClientAPIResponse {
  CodigoDoCliente: string;
  TipoDeCliente: "Jurídica" | "Física";
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

export interface ClientAPICreation {
  RazaoSocial: string;
  NomeFantasia: string;
  CnpjCpf: string;
  IeRG: string;
  TipoDeCliente: "Jurídica" | "Física";
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
