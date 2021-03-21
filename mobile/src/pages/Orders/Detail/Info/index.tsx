import React from "react";
import { ActivityIndicator } from "react-native";
import { useSelector } from "react-redux";

import { RootState } from "../../../../stores/modules/rootReducer";

import {
  Container,
  Content,
  Field,
  RowView,
} from "../../../../components/Common";

const OrderDetailInfo: React.FC = () => {
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
      <Content title="Informações do Pedido" fill>
        <RowView>
          <Field
            title="Código do Pedido"
            value={currentOrder.Pedido}
            row
            first
          />
          <Field
            title="Valor Total"
            value={currentOrder.totalAmount}
            row
            first
          />
        </RowView>
        <Field title="Cliente" value={currentOrder.Cliente} />
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
    </Container>
  );
};

export default OrderDetailInfo;
