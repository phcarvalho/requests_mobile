import React from "react";
import { ActivityIndicator, FlatList } from "react-native";
import { Avatar, ListItem, Text } from "react-native-elements";
import { useSelector } from "react-redux";

import { RootState } from "../../../../stores/modules/rootReducer";

import { Container, Content } from "../../../../components/Common";

import { QtyContainer } from "../../Form/Products/styles";

const OrderDetailProducts: React.FC = () => {
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
                  Preço Unitário: {item.PrecoUnitario}
                </ListItem.Subtitle>
                <ListItem.Subtitle>Total: {item.ValorTotal}</ListItem.Subtitle>
              </ListItem.Content>
              <QtyContainer>
                <Text style={{ textAlign: "center" }}>
                  {item.Quantidade.split(",")[0]}
                </Text>
              </QtyContainer>
            </ListItem>
          )}
        />
      </Content>
    </Container>
  );
};

export default OrderDetailProducts;
