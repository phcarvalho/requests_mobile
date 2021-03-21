import React, { ReactNode, useEffect, useState } from "react";
import { Formik } from "formik";
import { Avatar, Button, Icon, ListItem } from "react-native-elements";
import { useNavigation } from "@react-navigation/native";
import * as yup from "yup";
import { MaterialIcons, MaterialCommunityIcons } from "@expo/vector-icons";

import {
  Container,
  DateTimePicker,
  Picker,
  PickerItem,
  Form,
  FormContent,
  Content,
} from "../../../components/Common";

import { FlatList } from "react-native";
import { useSelector } from "react-redux";
import { RootState } from "../../../stores/modules/rootReducer";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import OrderFormInfo from "./Info";
import OrderFormProducts from "./Products";
import { OrderValues } from "./types";

const orderInitialValues: OrderValues = {
  deliveryDate: new Date(),
  paymentType: "",
  paymentCondition: "",
  client: "",
  products: [],
};

// const orderSchema = yup.object().shape({
//   date: yup.date().required("* Campo obrigatório"),
//   paymentType: yup.string().required("* Campo obrigatório"),
//   paymentCondition: yup.string().required("* Campo obrigatório"),
//   client: yup.string().required("* Campo obrigatório"),
// });

const Tab = createBottomTabNavigator();

const OrderForm: React.FC = () => {
  // const [conditionItems, setConditionItems] = useState<PickerItem[]>([]);
  // const [clientItems, setClientItems] = useState<PickerItem[]>([]);
  // const [products, setProducts] = useState<OrderProduct[]>([]);

  const navigation = useNavigation();

  // const { clients } = useSelector((state: RootState) => state.client);

  // const handleFormSubmit = (values: OrderValues) => {
  //   // console.log(values);
  // };

  // useEffect(() => {
  //   if (clients.length > 0) {
  //     const newClientItems = clients.map((client) => ({
  //       label: client.RazaoSocial,
  //       value: client.CnpjCpf,
  //     }));

  //     setClientItems(newClientItems);
  //   }
  // }, [clients]);

  // useEffect(() => {
  //   const newPaymentConditionItems: PickerItem[] = paymentConditions
  //     .filter((condition) => condition.guid === selectedTypeGUID)
  //     .map((condition) => ({
  //       label: condition.name,
  //       value: `${condition.id}`,
  //     }));

  //   setConditionItems(newPaymentConditionItems);
  // }, [selectedTypeGUID]);

  const handleSubmit = (values: any) => {
    console.log(values);
  };

  return (
    <Formik
      initialValues={orderInitialValues}
      onSubmit={(values) => handleSubmit(values)}
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
          {/* <Form>
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
      </Form> */}
        </Container>
      )}
    </Formik>
  );
};

export default OrderForm;
