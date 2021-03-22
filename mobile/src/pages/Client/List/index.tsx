import React, { useEffect, useState } from "react";
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

const ClientList: React.FC = () => {
  const navigation = useNavigation();
  const dispatch = useDispatch();

  const { user } = useSelector((state: RootState) => state.auth);
  const { clients, loading } = useSelector((state: RootState) => state.client);

  useEffect(() => {
    if (!clients && user.CodigoDoRepresentante) {
      dispatch(fetchClients(user.CodigoDoRepresentante));
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
        keyExtractor={(item, index) => `${item.CodigoDoCliente}-${index}`}
        data={clients}
        onRefresh={() => dispatch(fetchClients(user.CodigoDoRepresentante))}
        refreshing={loading}
        renderItem={({ item, index }) => (
          <ListItem bottomDivider onPress={() => handleClick(item)}>
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
