import React, { useEffect } from "react";
import { ActivityIndicator } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { useNavigation } from "@react-navigation/native";

import { RootState } from "../../../stores/modules/rootReducer";
import { resetCurrentClient } from "../../../stores/modules/client";

import Header from "../../../components/Header";
import { Container, RowView, Content, Field } from "../../../components/Common";

import { formatNumberByMask } from "../../../utils/text";
// import { Container } from './styles';

const ClientDetail: React.FC = () => {
  const navigation = useNavigation();
  const dispatch = useDispatch();

  const { currentClient } = useSelector((state: RootState) => state.client);

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
        <Field title="Nome" value={currentClient.RazaoSocial} first />
        <RowView>
          <Field title="Código" value={currentClient.CodigoDoCliente} row />
          <Field
            title="CPF/CNPJ"
            value={
              formatNumberByMask(
                currentClient.CnpjCpf,
                currentClient.CnpjCpf.length === 11
                  ? "###.###.###-##"
                  : "##.###.###/####-##"
              ).formattedValue
            }
            row
          />
        </RowView>
        <RowView>
          <Field title="Telefone" value={currentClient.Telefone} row />
          <Field title="Celular" value={currentClient.Celular} row />
        </RowView>
        <Field title="Lista de Preço" value={currentClient.ListaDePreco} />
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
