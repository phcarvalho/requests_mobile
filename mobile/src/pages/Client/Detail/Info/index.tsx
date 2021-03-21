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

const ClientDetailInfo: React.FC = () => {
  const { currentClient } = useSelector((state: RootState) => state.client);

  if (!currentClient) {
    return (
      <Container>
        <ActivityIndicator size="small" color="#666" />
      </Container>
    );
  }

  const isCompany = currentClient.TipoDeCliente === "Jurídica";

  return (
    <Container>
      <Content title="Informações do Cliente" fill>
        <Field title="Código" value={currentClient.CodigoDoCliente} first />
        <Field
          title={isCompany ? "Razão Social" : "Nome"}
          value={currentClient.RazaoSocial}
        />
        <Field
          title={isCompany ? "Nome Fantasia" : "Apelido"}
          value={currentClient.NomeFantasia}
        />
        <RowView>
          <Field
            title={isCompany ? "CNPJ" : "CPF"}
            value={
              formatNumberByMask(
                currentClient.CnpjCpf,
                isCompany ? "##.###.###/####-##" : "###.###.###-##"
              ).formattedValue
            }
            row
          />
          <Field
            title={isCompany ? "Insc. Estadual" : "RG"}
            value={currentClient.IeRG}
            row
          />
        </RowView>
        <Field title="Lista de Preço" value={currentClient.ListaDePreco} />
      </Content>
    </Container>
  );
};

export default ClientDetailInfo;
