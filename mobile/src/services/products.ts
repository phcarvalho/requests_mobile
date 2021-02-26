import { ProductAPIResponse } from "../types/products";
import api from "./api";

const getProducts = async (): Promise<ProductAPIResponse[]> => {
  const { data } = await api.get<ProductAPIResponse[]>("/produtos");

  return data;
};

export { getProducts };
