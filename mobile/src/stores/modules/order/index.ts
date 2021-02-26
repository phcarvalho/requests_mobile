import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { AppThunk } from "../..";
import api from "../../../services/api";
import { OrderAPIResponse } from "../../../types/orders";

interface OrderState {
  currentOrder: OrderAPIResponse | null;
  orders: OrderAPIResponse[];
  newOrders: OrderAPIResponse[];
  loading: boolean;
  error: string;
}

const initialState: OrderState = {
  currentOrder: null,
  orders: [],
  newOrders: [],
  loading: false,
  error: "",
};

const orderSlice = createSlice({
  name: "order",
  initialState,
  reducers: {
    getOrdersStart: (state) => {
      state.loading = true;
      state.error = "";
    },
    getOrdersSuccess: (state, action: PayloadAction<OrderAPIResponse[]>) => {
      state.orders = action.payload;
      state.loading = false;
    },
    getOrdersFailed: (state, action: PayloadAction<string>) => {
      state.error = action.payload;
      state.loading = false;
    },
    setCurrentOrder: (state, action: PayloadAction<OrderAPIResponse>) => {
      state.currentOrder = action.payload;
    },
    resetCurrentOrder: (state) => {
      state.currentOrder = null;
    },
    resetOrder: (state) => {
      state = initialState;
    },
  },
});

const {
  getOrdersStart,
  getOrdersSuccess,
  getOrdersFailed,
  setCurrentOrder,
  resetCurrentOrder,
  resetOrder,
} = orderSlice.actions;

const fetchOrders = (): AppThunk => async (dispatch) => {
  dispatch(getOrdersStart());

  try {
    const { data } = await api.get<OrderAPIResponse[]>("/Pedidos", {
      params: {
        numeroPedido: "90078071",
        mostraItem: true,
      },
    });

    dispatch(getOrdersSuccess(data));
  } catch (error) {
    dispatch(getOrdersFailed(error.message));
  }
};

export { fetchOrders, setCurrentOrder, resetCurrentOrder, resetOrder };

export default orderSlice.reducer;
