import React, { useEffect } from "react";
import { ActivityIndicator } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { useNavigation } from "@react-navigation/native";

import { RootState } from "../../../stores/modules/rootReducer";
import { resetCurrentClient } from "../../../stores/modules/client";

import { Container, RowView, Content, Field } from "../../../components/Common";

import { formatNumberByMask } from "../../../utils/text";
// import { Container } from './styles';

const ClientDetail: React.FC = () => {
  const navigation = useNavigation();
  const dispatch = useDispatch();

  const { currentClient } = useSelector((state: RootState) => state.client);

  const isCompany = currentClient?.TipoDeCliente === "Jurídica";

  useEffect(() => {
    return () => {
      dispatch(resetCurrentClient());
    };
  }, []);

  if (!currentClient) {
    return (
      <Container
        header={{
          title: "Detalhes do Cliente",
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
        title: currentClient.CodigoDoCliente,
        rightComponent: {
          icon: "close",
          onPress: () => navigation.goBack(),
        },
      }}
      scroll
    >
      <Content title="Informações do Cliente">
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
            first
          />
          <Field
            title={isCompany ? "Insc. Estadual" : "RG"}
            value={currentClient.IeRG}
            row
            first
          />
        </RowView>
        <Field title="Lista de Preço" value={currentClient.ListaDePreco} />
      </Content>
      <Content title="Contato">
        <RowView>
          <Field title="Telefone" value={currentClient.Telefone} row first />
          <Field title="Telefone 2" value={currentClient.Celular} row first />
        </RowView>
        <Field title="Celular" value={currentClient.Celular} />
        <Field title="Email" value={currentClient.Email} />
        <Field title="Email 2" value={currentClient.Email2} />
      </Content>
      <Content title="Endereço do Cliente">
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

export default ClientDetail;
