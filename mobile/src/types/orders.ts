export interface OrderAPIResponse {
  DataDeCriacao: string;
  DataDeEntrega: string;
  Pedido: string;
  Cliente: string;
  FormaDePagamento: string;
  CondicaoDePagamento: string;
  ItensPedidos: OrderAPIResponseItems[];
}

export interface OrderAPIResponseItems {
  Produto: string;
  Quantidade: string;
  PrecoUnitario: string;
  ValorTotal: string;
}

export interface OrderAPICreation {
  DataDeCriacao: string;
  DataDeEntrega: string;
  Cliente: string;
  FormaDePagamento: string;
  CondicaoDePagamento: string;
  ItensPedidos: OrderAPIResponseItems[];
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
