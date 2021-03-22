import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { string } from "yup/lib/locale";
import { AppThunk } from "../..";

import api from "../../../services/api";
import {
  fetchPaymentConditions,
  fetchPaymentTypes,
  fetchPriceLists,
} from "../../../services/other";

import {
  PaymentConditionAPIResponse,
  PaymentTypeAPIResponse,
  PriceListAPIResponse,
} from "../../../types/other";

interface OtherState {
  priceLists: PriceListAPIResponse[];
  paymConditions: PaymentConditionAPIResponse[];
  paymTypes: PaymentTypeAPIResponse[];
  loading: boolean;
  error: string;
}

const initialState: OtherState = {
  priceLists: [],
  paymConditions: [],
  paymTypes: [],
  loading: false,
  error: "",
};

const otherSlice = createSlice({
  name: "other",
  initialState,
  reducers: {
    getOthersStart: (state) => {
      state.loading = true;
      state.error = "";
    },
    getOthersSuccess: (state) => {
      state.loading = false;
    },
    getOthersFailed: (state, action: PayloadAction<string>) => {
      state.loading = false;
      state.error = action.payload;
    },
    setPriceLists: (state, action: PayloadAction<PriceListAPIResponse[]>) => {
      state.priceLists = action.payload;
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
    resetOther: (state) => {
      state = initialState;
    },
  },
});

const {
  getOthersStart,
  getOthersSuccess,
  getOthersFailed,
  setPriceLists,
  setPaymConditions,
  setPaymTypes,
  resetOther,
} = otherSlice.actions;

const fetchOtherInfo = (): AppThunk => async (dispatch) => {
  dispatch(getOthersStart());

  try {
    const priceLists = await fetchPriceLists();
    const paymTypes = await fetchPaymentTypes();
    const paymConditions = await fetchPaymentConditions();

    dispatch(setPriceLists(priceLists));
    dispatch(setPaymTypes(paymTypes));
    dispatch(setPaymConditions(paymConditions));

    dispatch(getOthersSuccess());
  } catch (error) {
    dispatch(getOthersFailed(error.message));

    throw Error("Error while getting others data");
  }

  return true;
};

export { fetchOtherInfo, resetOther };

export default otherSlice.reducer;
