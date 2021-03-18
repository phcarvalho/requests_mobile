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

import { formatNumberByMask } from "../../../../utils/text";

const ClientDetailAddress: React.FC = () => {
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
      <Content title="Endereço" fill>
        <Field title="Endereço" value={currentClient.Endereco} first />
        <RowView>
          <Field title="Bairro" value={currentClient.Bairro} row />
          <Field title="Complemento" value={currentClient.Complemento} row />
        </RowView>
        <RowView>
          <Field title="Cidade" value={currentClient.Cidade} row />
          <Field title="Estado" value={currentClient.Estado} row />
        </RowView>
        <RowView>
          <Field
            title="CEP"
            value={
              formatNumberByMask(currentClient.CEP, "##.###-###").formattedValue
            }
            row
          />
          <Field title="Região" value={currentClient.Regiao} row />
        </RowView>
      </Content>
    </Container>
  );
};

export default ClientDetailAddress;
