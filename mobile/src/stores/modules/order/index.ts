import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { AppThunk } from "../..";

import api from "../../../services/api";
import { createOrder, getOrders } from "../../../services/orders";

import { OrderAPIResponse } from "../../../types/orders";

import { formatPrice } from "../../../utils/price";

export interface OrderInterface extends OrderAPIResponse {
  isNew?: boolean;
  Representante?: string;
}

interface CurrentOrderInterface extends OrderInterface {
  totalAmount: string;
}

interface OrderState {
  currentOrder: CurrentOrderInterface | null;
  orders: OrderInterface[];
  loading: boolean;
  error: string;
}

const initialState: OrderState = {
  currentOrder: null,
  orders: [],
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
      state.loading = false;

      const newOrders: OrderInterface[] = state.orders.filter(
        (client) => client.isNew
      );

      state.orders = [...newOrders, ...action.payload];
    },
    getOrdersFailed: (state, action: PayloadAction<string>) => {
      state.error = action.payload;
      state.loading = false;
    },
    addNewOrder: (state, action: PayloadAction<OrderInterface>) => {
      state.orders = [...state.orders, action.payload];
    },
    clearNewOrders: (state) => {
      state.orders = state.orders.filter((client) => !client.isNew);
    },
    setCurrentOrder: (state, action: PayloadAction<OrderAPIResponse>) => {
      const order = action.payload;

      let totalAmount = 0;

      order.ItensPedidos.forEach((product) => {
        totalAmount += parseFloat(product.ValorTotal.replace(/[^\d.,]/gi, ""));
      });

      state.currentOrder = {
        ...order,
        totalAmount: formatPrice(totalAmount),
      };
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
  addNewOrder,
  clearNewOrders,
  setCurrentOrder,
  resetCurrentOrder,
  resetOrder,
} = orderSlice.actions;

const fetchOrders = (userCode: string): AppThunk => async (dispatch) => {
  dispatch(getOrdersStart());

  try {
    const orders = await getOrders({
      codigoRepresentante: userCode,
      mostraItem: true,
    });

    dispatch(getOrdersSuccess(orders));
  } catch (error) {
    dispatch(getOrdersFailed(error.message));

    throw Error("Error while fetching orders");
  }

  return true;
};

const createOrders = (): AppThunk => async (dispatch, getState) => {
  const {
    order: { orders },
  } = getState();

  try {
    await Promise.all(
      orders
        .filter((order) => order.isNew)
        .map(async (order) => {
          await createOrder(order);
        })
    );

    dispatch(clearNewOrders());
  } catch (error) {
    throw Error("Error while creating new orders");
  }

  return true;
};

export {
  fetchOrders,
  createOrders,
  addNewOrder,
  setCurrentOrder,
  resetCurrentOrder,
  resetOrder,
};

export default orderSlice.reducer;
