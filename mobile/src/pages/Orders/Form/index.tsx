import React, { ReactNode } from "react";
import { useNavigation } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { MaterialIcons, MaterialCommunityIcons } from "@expo/vector-icons";
import { useDispatch, useSelector } from "react-redux";
import { Formik } from "formik";
import * as yup from "yup";

import { Container, FormikSnackBar } from "../../../components/Common";

import {
  addNewOrder,
  fetchOrders,
  OrderInterface,
} from "../../../stores/modules/order";
import { RootState } from "../../../stores/modules/rootReducer";

import { formatPrice } from "../../../utils/price";
import { OrderValues } from "./types";

import { createOrder } from "../../../services/orders";

import OrderFormInfo from "./Info";
import OrderFormProducts from "./Products";
import { convertToNumber } from "../../../utils/numbers";

const orderInitialValues: OrderValues = {
  deliveryDate: new Date(),
  creationDate: new Date(),
  paymentType: "",
  paymentCondition: "",
  client: "",
  products: [],
};

const productSchema = yup.object().shape({
  id: yup.string().required(),
  name: yup.string(),
  price: yup.string().required(),
  qty: yup.string().required(),
});

const orderSchema = yup.object().shape({
  deliveryDate: yup.date().required("* Campo obrigatório"),
  creationDate: yup.date(),
  paymentType: yup.string().required("* Campo obrigatório"),
  paymentCondition: yup.string().required("* Campo obrigatório"),
  client: yup.string().required("* Campo obrigatório"),
  products: yup
    .array()
    .of(productSchema)
    .min(1, "Você precisa adicionar pelo menos um produto")
    .required(),
});

const Tab = createBottomTabNavigator();

const OrderForm: React.FC = () => {
  const navigation = useNavigation();
  const dispatch = useDispatch();

  const { user } = useSelector((state: RootState) => state.auth);

  const handleSubmit = async (values: OrderValues) => {
    const order: OrderInterface = {
      Cliente: values.client,
      CondicaoDePagamento: values.paymentCondition,
      FormaDePagamento: values.paymentType,
      DataDeCriacao: values.creationDate.toLocaleString(),
      DataDeEntrega: values.deliveryDate.toLocaleString(),
      Empresa: "",
      Moeda: "",
      ItensPedidos: values.products.map((product) => ({
        Produto: product.id,
        PrecoUnitario: convertToNumber(product.price)
          .toFixed(2)
          .replace(".", ","),
        Quantidade: convertToNumber(product.qty).toFixed(2).replace(".", ","),
        Desconto: convertToNumber(product.percDiscount)
          .toFixed(2)
          .replace(".", ","),
        ValorTotal: convertToNumber(product.total).toFixed(2).replace(".", ","),
        Unidade: product.unity,
      })),
      isNew: true,
      Pedido: "Novo Pedido",
      Representante: user?.CodigoDoRepresentante ?? "",
    };

    try {
      await createOrder(order);

      dispatch(fetchOrders(user?.CodigoDoRepresentante ?? ""));
    } catch (error) {
      dispatch(addNewOrder(order));
    }

    navigation.goBack();
  };

  return (
    <Formik
      initialValues={orderInitialValues}
      onSubmit={(values) => handleSubmit(values)}
      validationSchema={orderSchema}
    >
      {({ handleSubmit }) => (
        <Container
          header={{
            title: "Novo Pedido",
            leftComponent: {
              icon: "close",
              onPress: () => navigation.goBack(),
            },
            rightComponent: {
              icon: "done",
              onPress: () => handleSubmit(),
            },
          }}
        >
          <FormikSnackBar message="Seu pedido não pode ser criado: Verifique as informações" />
          <Tab.Navigator
            tabBarOptions={{
              style: {
                backgroundColor: "#333",
              },
              activeTintColor: "#fff",
              inactiveTintColor: "#666",
            }}
          >
            <Tab.Screen
              name="Informações"
              component={OrderFormInfo}
              options={{
                tabBarIcon: ({ color, size }): ReactNode => (
                  <MaterialIcons name="list-alt" color={color} size={size} />
                ),
              }}
            />
            <Tab.Screen
              name="Produtos"
              component={OrderFormProducts}
              options={{
                tabBarIcon: ({ color, size }): ReactNode => (
                  <MaterialCommunityIcons
                    name="clipboard-list-outline"
                    color={color}
                    size={size}
                  />
                ),
              }}
            />
          </Tab.Navigator>
        </Container>
      )}
    </Formik>
  );
};

export default OrderForm;
