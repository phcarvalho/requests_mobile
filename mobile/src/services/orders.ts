import { OrderInterface } from "../stores/modules/order";
import {
  OrderAPICreation,
  OrderAPIResponse,
  OrderAPIResponseParams,
} from "../types/orders";
import api from "./api";

export const getOrders = async (
  params?: OrderAPIResponseParams
): Promise<OrderAPIResponse[]> => {
  const { data } = await api.get<OrderAPIResponse[]>("/Pedidos", {
    params: params,
  });

  return data;
};

export const createOrder = async (order: OrderInterface) => {
  const body: OrderAPICreation = {
    Cliente: order.Cliente,
    CondicaoDePagamento: order.CondicaoDePagamento,
    DataDeEntrega: order.DataDeEntrega,
    DataDeCriacao: order.DataDeCriacao,
    FormaDePagamento: order.FormaDePagamento,
    ItensPedidos: order.ItensPedidos,
    Representante: order.Representante ?? "",
  };

  console.log(body);

  const { data } = await api.post("/Pedidos", body);
};
