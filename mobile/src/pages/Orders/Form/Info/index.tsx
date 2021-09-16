import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useFormikContext } from "formik";

import { RootState } from "../../../../stores/modules/rootReducer";

import {
  Container,
  DateTimePicker,
  Form,
  FormContent,
  Picker,
  PickerItem,
} from "../../../../components/Common";

import { OrderValues } from "../types";
import { fetchOtherInfo } from "../../../../stores/modules/other";

const OrderFormInfo: React.FC = () => {
  const [paymConditionOptions, setPaymConditionOptions] = useState<
    PickerItem[]
  >([]);
  const [paymTypeOptions, setPaymTypeOptions] = useState<PickerItem[]>([]);
  const [clientOptions, setClientOptions] = useState<PickerItem[]>([]);

  const dispatch = useDispatch();

  const {
    values,
    setFieldValue,
    handleChange,
    touched,
    errors,
  } = useFormikContext<OrderValues>();

  const { clients } = useSelector((state: RootState) => state.client);
  const { paymConditions, paymTypes } = useSelector(
    (state: RootState) => state.other
  );

  useEffect(() => {
    if (paymConditions) {
      const options: PickerItem[] = paymConditions.map((condition) => ({
        label: condition.Nome,
        value: condition.Codigo,
      }));

      setPaymConditionOptions(options);
      setFieldValue("paymentCondition", options[0].value ?? "");
    } else {
      dispatch(fetchOtherInfo());
    }
  }, [paymConditions]);

  useEffect(() => {
    if (paymTypes) {
      const options: PickerItem[] = paymTypes.map((condition) => ({
        label: condition.Nome,
        value: condition.Codigo,
      }));

      setPaymTypeOptions(options);
      setFieldValue("paymentType", options[0].value ?? "");
    } else {
      dispatch(fetchOtherInfo());
    }
  }, [paymTypes]);

  useEffect(() => {
    const options: PickerItem[] = clients.map((condition) => ({
      label: condition.RazaoSocial,
      value: condition.CodigoDoCliente,
    }));

    setClientOptions(options);
    setFieldValue("client", options[0].value ?? "");
  }, [clients]);

  return (
    <Container scroll>
      <Form>
        <FormContent title="Informações do Pedido">
          <DateTimePicker
            title="Data de Entrega"
            value={values.deliveryDate}
            onDateChange={(date) => setFieldValue("deliveryDate", date)}
          />
          <Picker
            title="Cliente"
            selectedValue={values.client}
            items={clientOptions}
            onValueChange={(itemValue) => setFieldValue("client", itemValue)}
            errorMessage={touched.client && errors.client ? errors.client : ""}
          />
          <Picker
            title="Forma de Pagamento"
            items={paymTypeOptions}
            selectedValue={values.paymentType}
            onValueChange={(itemValue) => {
              setFieldValue("paymentType", itemValue);
            }}
            errorMessage={
              touched.paymentType && errors.paymentType
                ? errors.paymentType
                : ""
            }
          />
          <Picker
            title="Condição de Pagamento"
            items={paymConditionOptions}
            selectedValue={values.paymentCondition}
            onValueChange={(itemValue) => {
              setFieldValue("paymentCondition", itemValue);
            }}
            errorMessage={
              touched.paymentCondition && errors.paymentCondition
                ? errors.paymentCondition
                : ""
            }
          />
        </FormContent>
      </Form>
    </Container>
  );
};

export default OrderFormInfo;
