export interface OrderAPIResponse {
  DataDeCriacao: string;
  DataDeEntrega: string;
  Pedido: string;
  Cliente: string;
  FormaDePagamento: string;
  CondicaoDePagamento: string;
  ItensPedidos: OrderAPIResponseItem[];
}

export interface OrderAPIResponseItem {
  Produto: string;
  Quantidade: string;
  PrecoUnitario: string;
  ValorTotal: string;
}

export interface OrderAPIResponseParams {
  codigoRepresentante?: string;
  mostraItem?: boolean;
  numeroPedido?: string;
}

export interface OrderAPICreationItem extends OrderAPIResponseItem {}

export interface OrderAPICreation {
  Cliente: string;
  DataDeEntrega: string;
  DataDeCriacao: string;
  FormaDePagamento: string;
  CondicaoDePagamento: string;
  Representante: string;
  ItensPedidos: OrderAPICreationItem[];
}
