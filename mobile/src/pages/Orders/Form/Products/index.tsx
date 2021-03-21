import React from "react";
import { ActivityIndicator, FlatList } from "react-native";
import { useSelector } from "react-redux";

import { RootState } from "../../../../stores/modules/rootReducer";

import { Container, Content } from "../../../../components/Common";

import { Avatar, ListItem } from "react-native-elements";

const OrderFormProducts: React.FC = () => {
  const { currentOrder } = useSelector((state: RootState) => state.order);

  if (!currentOrder) {
    return (
      <Container>
        <ActivityIndicator size="small" color="#666" />
      </Container>
    );
  }

  return (
    <Container>
      <Content title="Produtos" fill>
        <FlatList
          keyExtractor={(item, index) => `product-${index}`}
          data={currentOrder.ItensPedidos}
          renderItem={({ item, index }) => (
            <ListItem key={index} bottomDivider>
              <Avatar
                source={require("../../../../../assets/flat-icons/box.png")}
              />
              <ListItem.Content>
                <ListItem.Title numberOfLines={1}>
                  {item.Produto}
                </ListItem.Title>
                <ListItem.Subtitle>
                  Preço: {item.PrecoUnitario} - Qtde:{" "}
                  {parseFloat(item.Quantidade).toFixed(2)}
                </ListItem.Subtitle>
                <ListItem.Subtitle>Total: {item.ValorTotal}</ListItem.Subtitle>
              </ListItem.Content>
            </ListItem>
          )}
        />
      </Content>
    </Container>
  );
};

export default OrderFormProducts;
