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
