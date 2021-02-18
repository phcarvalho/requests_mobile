import React from "react";
import { useNavigation } from "@react-navigation/native";

import { Container } from "../../../components/Common";

// import { Container } from './styles';

const OrderForm: React.FC = () => {
  const navigation = useNavigation();

  return (
    <Container
      header={{
        title: "Novo Pedido",
        rightComponent: {
          icon: "close",
          onPress: () => navigation.goBack(),
        },
      }}
    ></Container>
  );
};

export default OrderForm;
