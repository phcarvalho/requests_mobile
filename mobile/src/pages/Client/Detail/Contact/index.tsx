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

const ClientDetailContact: React.FC = () => {
  const { currentClient } = useSelector((state: RootState) => state.client);

  if (!currentClient) {
    return (
      <Container>
        <ActivityIndicator size="small" color="#666" />
      </Container>
    );
  }

  return (
    <Container>
      <Content title="Contato" fill>
        <RowView>
          <Field title="Telefone" value={currentClient.Telefone} row first />
          <Field title="Telefone 2" value={currentClient.Celular} row first />
        </RowView>
        <Field title="Celular" value={currentClient.Celular} />
        <Field title="Email" value={currentClient.Email} />
        <Field title="Email 2" value={currentClient.Email2} />
      </Content>
    </Container>
  );
};

export default ClientDetailContact;
