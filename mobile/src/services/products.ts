import {
  ProductAPIResponse,
  ProductAPIResponseParams,
} from "../types/products";
import api from "./api";

const getProducts = async (
  params?: ProductAPIResponseParams
): Promise<ProductAPIResponse[]> => {
  const { data } = await api.get<ProductAPIResponse[]>("/produtos", {
    params: params,
  });

  return data;
};

export { getProducts };
