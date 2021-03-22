import {
  PaymentConditionAPIResponse,
  PaymentTypeAPIResponse,
  PriceListAPIResponse,
} from "../types/other";
import api from "./api";

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

export const fetchPriceLists = async (): Promise<PriceListAPIResponse[]> => {
  const { data } = await api.get<PriceListAPIResponse[]>("/ListaDePrecos");

  return data;
};
