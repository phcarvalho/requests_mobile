import React, { useEffect, useState } from "react";
import { Formik } from "formik";
import { Avatar, Button, Icon, ListItem } from "react-native-elements";
import { useNavigation } from "@react-navigation/native";
import * as yup from "yup";

import {
  Container,
  DateTimePicker,
  Picker,
  PickerItem,
  Form,
  FormContent,
  Content,
} from "../../../components/Common";

import { paymentTypes, paymentConditions } from "../infos";
import { FlatList } from "react-native";
import { useSelector } from "react-redux";
import { RootState } from "../../../stores/modules/rootReducer";

const paymentTypeItems: PickerItem[] = paymentTypes.map((type) => ({
  label: type.name,
  value: `${type.id}`,
}));

const paymentConditionId = paymentConditions.find(
  (condition) => condition.guid === paymentTypes[0].guid
)?.id;

interface OrderProduct {
  id: string;
  name: string;
  price: string;
  qty: string;
}
interface OrderValues {
  deliveryDate: Date;
  paymentType: string;
  paymentCondition: string;
  client: string;
}

const orderInitialValues: OrderValues = {
  deliveryDate: new Date(),
  paymentType: `${paymentTypes[0].id}`,
  paymentCondition: `${paymentConditionId}`,
  client: "",
};

const orderSchema = yup.object().shape({
  // date: yup.date().required("* Campo obrigatório"),
  // paymentType: yup.string().required("* Campo obrigatório"),
  // paymentCondition: yup.string().required("* Campo obrigatório"),
  // client: yup.string().required("* Campo obrigatório"),
});

const OrderForm: React.FC = () => {
  const [selectedTypeGUID, setSelectedTypeGUID] = useState(
    paymentTypes[0].guid
  );
  const [conditionItems, setConditionItems] = useState<PickerItem[]>([]);
  const [clientItems, setClientItems] = useState<PickerItem[]>([]);
  const [products, setProducts] = useState<OrderProduct[]>([]);

  const navigation = useNavigation();

  const { clients } = useSelector((state: RootState) => state.client);

  const handleFormSubmit = (values: OrderValues) => {
    console.log(values);
  };

  useEffect(() => {
    console.log(clients);

    if (clients.length > 0) {
      const newClientItems = clients.map((client) => ({
        label: client.RazaoSocial,
        value: client.CnpjCpf,
      }));

      setClientItems(newClientItems);
    }
  }, [clients]);

  useEffect(() => {
    const newPaymentConditionItems: PickerItem[] = paymentConditions
      .filter((condition) => condition.guid === selectedTypeGUID)
      .map((condition) => ({
        label: condition.name,
        value: `${condition.id}`,
      }));

    setConditionItems(newPaymentConditionItems);
  }, [selectedTypeGUID]);

  return (
    <Container
      header={{
        title: "Novo Pedido",
        rightComponent: {
          icon: "close",
          onPress: () => navigation.goBack(),
        },
      }}
    >
      <Form>
        <Formik
          initialValues={orderInitialValues}
          onSubmit={(values) => handleFormSubmit(values)}
          validationSchema={orderSchema}
        >
          {({
            handleChange,
            handleSubmit,
            setFieldValue,
            values,
            touched,
            errors,
          }) => (
            <>
              <Content title="Informações do Pedido">
                <DateTimePicker
                  title="Data de Entrega"
                  value={values.deliveryDate}
                  onDateChange={(date) => setFieldValue("deliveryDate", date)}
                />
                <Picker
                  title="Cliente"
                  selectedValue={values.client}
                  items={clientItems}
                  onValueChange={(itemValue) =>
                    setFieldValue("client", itemValue)
                  }
                  errorMessage={
                    touched.client && errors.client ? errors.client : ""
                  }
                />
                <Picker
                  title="Forma de Pagamento"
                  items={paymentTypeItems}
                  selectedValue={values.paymentType}
                  onValueChange={(itemValue) => {
                    setSelectedTypeGUID(
                      paymentConditions.find(
                        (condition) => `${condition.id}` === itemValue
                      )?.guid ?? paymentConditions[0].guid
                    );
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
                  items={conditionItems}
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
              </Content>
              <Content
                fill
                title="Produtos"
                rightComponent={
                  <Icon
                    name="add"
                    onPress={() => {
                      setProducts([
                        ...products,
                        {
                          id: `${products.length}`,
                          name: `Product Test ${products.length + 1}`,
                          price: `R$ ${(Math.random() * 100)
                            .toFixed(2)
                            .replace(".", ",")}`,
                          qty: `${Math.floor(Math.random() * 50)}`,
                        },
                      ]);
                    }}
                  />
                }
              >
                {products.map((item, index) => (
                  <ListItem key={index} bottomDivider>
                    <Avatar
                      source={require("../../../../assets/flat-icons/box.png")}
                    />
                    <ListItem.Content>
                      <ListItem.Title>{item.name}</ListItem.Title>
                      <ListItem.Subtitle>
                        Price: {item.price} - Qty: {item.qty}
                      </ListItem.Subtitle>
                    </ListItem.Content>
                    <Icon
                      name="remove"
                      onPress={() => {
                        setProducts(
                          products.filter((product) => product.id !== item.id)
                        );
                      }}
                    />
                  </ListItem>
                ))}
              </Content>
              <Button title="Criar" onPress={() => handleSubmit()} />
            </>
          )}
        </Formik>
      </Form>
    </Container>
  );
};

export default OrderForm;
