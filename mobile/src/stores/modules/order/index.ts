import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { AppThunk } from "../..";
import { paymentConditions } from "../../../pages/Orders/infos";
import api from "../../../services/api";
import {
  fetchPaymentConditions,
  fetchPaymentTypes,
} from "../../../services/orders";
import {
  OrderAPIResponse,
  PaymentConditionAPIResponse,
  PaymentTypeAPIResponse,
} from "../../../types/orders";

interface CurrentOrderInterface extends OrderAPIResponse {
  totalAmount: string;
}

interface OrderState {
  currentOrder: CurrentOrderInterface | null;
  orders: OrderAPIResponse[];
  newOrders: OrderAPIResponse[];
  loading: boolean;
  error: string;
  paymConditions: PaymentConditionAPIResponse[];
  paymTypes: PaymentTypeAPIResponse[];
}

const initialState: OrderState = {
  currentOrder: null,
  orders: [],
  newOrders: [],
  loading: false,
  error: "",
  paymConditions: [],
  paymTypes: [],
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
    setPaymConditions: (
      state,
      action: PayloadAction<PaymentConditionAPIResponse[]>
    ) => {
      state.paymConditions = action.payload;
    },
    setPaymTypes: (state, action: PayloadAction<PaymentTypeAPIResponse[]>) => {
      state.paymTypes = action.payload;
    },
    setCurrentOrder: (state, action: PayloadAction<OrderAPIResponse>) => {
      const order = action.payload;

      let totalAmount = 0;

      order.ItensPedidos.forEach((product) => {
        totalAmount += parseFloat(product.ValorTotal.replace(/[^\d.,]/gi, ""));
      });

      state.currentOrder = {
        ...order,
        totalAmount: `R$ ${totalAmount.toFixed(2).replace(".", ",")}`,
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
  setCurrentOrder,
  setPaymConditions,
  setPaymTypes,
  resetCurrentOrder,
  resetOrder,
} = orderSlice.actions;

const fetchOrders = (userCode: string): AppThunk => async (dispatch) => {
  dispatch(getOrdersStart());

  try {
    const { data } = await api.get<OrderAPIResponse[]>("/Pedidos", {
      params: { CodigoRepresentante: userCode },
    });

    const paymTypes = await fetchPaymentTypes();
    const paymConditions = await fetchPaymentConditions();

    dispatch(setPaymTypes(paymTypes));
    dispatch(setPaymConditions(paymConditions));

    dispatch(getOrdersSuccess(data));
  } catch (error) {
    dispatch(getOrdersFailed(error.message));
  }
};

export { fetchOrders, setCurrentOrder, resetCurrentOrder, resetOrder };

export default orderSlice.reducer;
