import { useNavigation } from "@react-navigation/native";
import React from "react";

import { Container } from "../../../components/Common";

// import { Container } from './styles';

const OrderList: React.FC = () => {
  const navigation = useNavigation();

  return (
    <Container
      header={{
        title: "Pedidos",
        rightComponent: {
          icon: "add",
          onPress: () => navigation.navigate("OrderForm"),
        },
      }}
    ></Container>
  );
};

export default OrderList;
