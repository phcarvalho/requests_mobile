import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { AppThunk } from "../..";

import { ProductAPIResponse } from "../../../types/products";

import { getProducts } from "../../../services/products";
interface ProductState {
  products: ProductAPIResponse[];
  loading: boolean;
  error: string;
}

const initialState: ProductState = {
  products: [],
  loading: false,
  error: "",
};

const productSlice = createSlice({
  name: "order",
  initialState,
  reducers: {
    getProductsStart: (state) => {
      state.loading = true;
      state.error = "";
    },
    getProductsSuccess: (
      state,
      action: PayloadAction<ProductAPIResponse[]>
    ) => {
      state.products = action.payload;
      state.loading = false;
    },
    getProductsFailed: (state, action: PayloadAction<string>) => {
      state.error = action.payload;
      state.loading = false;
    },
  },
});

const {
  getProductsStart,
  getProductsSuccess,
  getProductsFailed,
} = productSlice.actions;

const fetchProducts = (userCode: string): AppThunk => async (dispatch) => {
  dispatch(getProductsStart());

  try {
    const products = await getProducts({
      codigoRepresentante: userCode,
    });

    dispatch(getProductsSuccess(products));
  } catch (error) {
    dispatch(getProductsFailed(error.message));

    throw Error("Error while fetching products");
  }
};

export { fetchProducts };

export default productSlice.reducer;
