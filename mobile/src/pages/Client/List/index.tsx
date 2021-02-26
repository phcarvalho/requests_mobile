import React, { useEffect } from "react";
import { useNavigation } from "@react-navigation/native";
import { Avatar, ListItem } from "react-native-elements";
import { useDispatch, useSelector } from "react-redux";
import { FlatList } from "react-native";

import { RootState } from "../../../stores/modules/rootReducer";
import { fetchClients, setCurrentClient } from "../../../stores/modules/client";

import { Container } from "../../../components/Common";

import { formatNumberByMask } from "../../../utils/text";
import { ClientAPIResponse } from "../../../types/clients";

// import { Container } from './styles';

const clientList: ClientAPIResponse[] = [
  {
    CodigoDoCliente: "80399",
    TipoDeCliente: "Jurídica",
    RazaoSocial: "007 MOTOS PECAS E SERVICOS LTDA",
    NomeFantasia: "007 MOTOS",
    CnpjCpf: "13715241000169",
    IeRG: "633105020113",
    DataDeAbertura: "24/07/2019 03:00:00",
    ListaDePreco: "TABELA 001 - 001",
    Regiao: "REGIAO M SÃO PAULO",
    Endereco: "RUA XAVIER PINHEIRO, 264",
    Bairro: "VILA MATIAS",
    Complemento: "BAIXOS",
    CEP: "11015090",
    Cidade: "SANTOS",
    Estado: "SP",
    Telefone: "(13) 3223-2103",
    OutroTelefone: " ",
    Celular: "(13) 97415-4017",
    Email: "motos007.p.s@hotmail.com",
    Email2: "motos007.p.s@hotmail.com",
  },
];

const ClientList: React.FC = () => {
  const navigation = useNavigation();
  const dispatch = useDispatch();

  const { clients, loading } = useSelector((state: RootState) => state.client);

  useEffect(() => {
    if (!clients) {
      dispatch(fetchClients());
    }
  }, []);

  const handleClick = (client: ClientAPIResponse) => {
    dispatch(setCurrentClient(client));

    navigation.navigate("ClientDetail");
  };

  return (
    <Container
      header={{
        title: "Clientes",
        rightComponent: {
          icon: "add",
          onPress: () => navigation.navigate("ClientForm"),
        },
      }}
    >
      <FlatList
        keyExtractor={(item) => item.CodigoDoCliente}
        // data={clients}
        data={clientList}
        onRefresh={() => dispatch(fetchClients())}
        refreshing={loading}
        renderItem={({ item, index }) => (
          <ListItem key={index} bottomDivider onPress={() => handleClick(item)}>
            <Avatar
              source={require("../../../../assets/flat-icons/contact-book2.png")}
            />
            <ListItem.Content>
              <ListItem.Title numberOfLines={1}>
                {item.RazaoSocial}
              </ListItem.Title>
              <ListItem.Subtitle>
                {
                  formatNumberByMask(
                    item.CnpjCpf,
                    item.CnpjCpf.length > 11
                      ? "##.###.###/####-##"
                      : "###.###.###-##"
                  ).formattedValue
                }
              </ListItem.Subtitle>
              <ListItem.Subtitle>{item.Email}</ListItem.Subtitle>
              <ListItem.Subtitle>{item.Telefone}</ListItem.Subtitle>
            </ListItem.Content>
            <ListItem.Chevron />
          </ListItem>
        )}
      />
    </Container>
  );
};

export default ClientList;
