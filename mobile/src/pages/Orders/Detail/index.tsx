import React, { useEffect } from "react";
import { useNavigation } from "@react-navigation/native";
import { useDispatch, useSelector } from "react-redux";
import { ActivityIndicator, FlatList } from "react-native";

import { resetCurrentOrder } from "../../../stores/modules/order";
import { RootState } from "../../../stores/modules/rootReducer";

import { Container, Content, Field, RowView } from "../../../components/Common";
import { Avatar, ListItem } from "react-native-elements";

// import { Container } from './styles';

const OrderDetail: React.FC = () => {
  const navigation = useNavigation();
  const dispatch = useDispatch();

  const { currentOrder } = useSelector((state: RootState) => state.order);

  useEffect(() => {
    return () => {
      dispatch(resetCurrentOrder());
    };
  }, []);

  if (!currentOrder) {
    return (
      <Container
        header={{
          title: "Detalhes dos Pedidos",
          rightComponent: {
            icon: "close",
            onPress: () => navigation.goBack(),
          },
        }}
        verticalCenter
      >
        <ActivityIndicator size="small" color="#666" />
      </Container>
    );
  }

  return (
    <Container
      header={{
        title: currentOrder.Pedido,
        rightComponent: {
          icon: "close",
          onPress: () => navigation.goBack(),
        },
      }}
    >
      <Content title="Informações do Pedido">
        <Field title="Código do Pedido" value={currentOrder.Pedido} first />
        <Field title="Cliente" value={currentOrder.Cliente} first />
        <RowView>
          <Field
            title="Forma de Pgto."
            value={currentOrder.FormaDePagamento}
            row
          />
          <Field
            title="Condição de Pgto."
            value={currentOrder.CondicaoDePagamento}
            row
          />
        </RowView>
        <RowView>
          <Field
            title="Data de Criação"
            value={currentOrder.DataDeCriacao}
            row
          />
          <Field
            title="Data de Entrega"
            value={currentOrder.DataDeEntrega}
            row
          />
        </RowView>
      </Content>
      <Content title="Itens do Pedido" fill>
        <FlatList
          keyExtractor={(item, index) => `product-${index}`}
          data={currentOrder.ItensPedidos}
          renderItem={({ item, index }) => (
            <ListItem key={index} bottomDivider>
              <Avatar
                source={require("../../../../assets/flat-icons/box.png")}
              />
              <ListItem.Content>
                <ListItem.Title numberOfLines={1}>
                  {item.Produto}
                </ListItem.Title>
                <ListItem.Subtitle>
                  Preço:{item.PrecoUnitario} - Qtde:{" "}
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

export default OrderDetail;
