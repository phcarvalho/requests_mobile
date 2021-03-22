export interface PriceListAPIResponse {
  ID: string;
  Codigo: string;
}

export interface PriceListItemAPIResponse {
  CodigoProduto: string;
  Produto: string;
  Valor: string;
  Unidade: string;
}

export interface PaymentConditionAPIResponse {
  Codigo: string;
  Nome: string;
  QtdeParcelas: string;
  Prazo: string;
  Acrescimo: string;
  Desconto: string;
}

export interface PaymentTypeAPIResponse {
  Codigo: string;
  Nome: string;
}
