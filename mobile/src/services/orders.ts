import {
  OrderAPIResponse,
  PaymentConditionAPIResponse,
  PaymentTypeAPIResponse,
} from "../types/orders";
import api from "./api";

// export const fetchOrders = async (): Promise<OrderAPIResponse[]> => {
//   const { data } = await api.get<OrderAPIResponse[]>("/Pedidos");

//   return data;
// };

export const fetchPaymentTypes = async (): Promise<
  PaymentTypeAPIResponse[]
> => {
  const { data } = await api.get<PaymentTypeAPIResponse[]>("/FormaPagamento");

  return data;
};

export const fetchPaymentConditions = async (): Promise<
  PaymentConditionAPIResponse[]
> => {
  const { data } = await api.get<PaymentConditionAPIResponse[]>(
    "/CondicaoPagamento"
  );

  return data;
};
