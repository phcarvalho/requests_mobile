import React, { useEffect } from "react";
import { FlatList } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Avatar, ListItem } from "react-native-elements";
import { useDispatch, useSelector } from "react-redux";

import { RootState } from "../../../stores/modules/rootReducer";
import { fetchOrders, setCurrentOrder } from "../../../stores/modules/order";

import { Container } from "../../../components/Common";
import { OrderAPIResponse } from "../../../types/orders";

// import { Container } from './styles';

const ordersTest: OrderAPIResponse[] = [
  {
    Pedido: "Pedido 123",
    Cliente: "Cliente Teste",
    CondicaoDePagamento: "Condição 1",
    DataDeCriacao: "12/10/12",
    DataDeEntrega: "12/10/12",
    FormaDePagamento: "Forma teste",
    ItensPedidos: [
      {
        Produto: "Product 1",
        PrecoUnitario: "10",
        Quantidade: "10",
        ValorTotal: "100",
      },
      {
        Produto: "Product 2",
        PrecoUnitario: "10",
        Quantidade: "10",
        ValorTotal: "100",
      },
      {
        Produto: "Product 3",
        PrecoUnitario: "10",
        Quantidade: "10",
        ValorTotal: "100",
      },
      {
        Produto: "Product 4",
        PrecoUnitario: "10",
        Quantidade: "10",
        ValorTotal: "100",
      },
      {
        Produto: "Product 5",
        PrecoUnitario: "10",
        Quantidade: "10",
        ValorTotal: "100",
      },
      {
        Produto: "Product 6",
        PrecoUnitario: "10",
        Quantidade: "10",
        ValorTotal: "100",
      },
      {
        Produto: "Product 7",
        PrecoUnitario: "10",
        Quantidade: "10",
        ValorTotal: "100",
      },
      {
        Produto: "Product 2",
        PrecoUnitario: "10",
        Quantidade: "10",
        ValorTotal: "100",
      },
      {
        Produto: "Product 8",
        PrecoUnitario: "10",
        Quantidade: "10",
        ValorTotal: "100",
      },
      {
        Produto: "Product 9",
        PrecoUnitario: "10",
        Quantidade: "10",
        ValorTotal: "100",
      },
    ],
  },
];

const OrderList: React.FC = () => {
  const navigation = useNavigation();
  const dispatch = useDispatch();

  const { orders, loading } = useSelector((state: RootState) => state.order);

  useEffect(() => {
    if (!orders) {
      dispatch(fetchOrders());
    }
  }, []);

  const handleClick = (order: OrderAPIResponse) => {
    dispatch(setCurrentOrder(order));

    navigation.navigate("OrderDetail");
  };

  return (
    <Container
      header={{
        title: "Pedidos",
        rightComponent: {
          icon: "add",
          onPress: () => navigation.navigate("OrderForm"),
        },
      }}
    >
      <FlatList
        keyExtractor={(item) => item.Pedido}
        // data={orders}
        data={ordersTest}
        onRefresh={() => dispatch(fetchOrders())}
        refreshing={loading}
        renderItem={({ item, index }) => (
          <ListItem key={index} bottomDivider onPress={() => handleClick(item)}>
            <Avatar
              source={require("../../../../assets/flat-icons/documents.png")}
            />
            <ListItem.Content>
              <ListItem.Title numberOfLines={1}>{item.Cliente}</ListItem.Title>
              <ListItem.Subtitle>
                {item.Pedido} - {item.DataDeCriacao}
              </ListItem.Subtitle>
              <ListItem.Subtitle>
                {item.FormaDePagamento}: {item.CondicaoDePagamento}
              </ListItem.Subtitle>
            </ListItem.Content>
            <ListItem.Chevron />
          </ListItem>
        )}
      />
    </Container>
  );
};

export default OrderList;
