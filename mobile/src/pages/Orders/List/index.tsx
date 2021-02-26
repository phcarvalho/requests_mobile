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
        data={orders}
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
