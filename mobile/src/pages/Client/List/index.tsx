import React from "react";
import { useNavigation } from "@react-navigation/native";
import { Avatar, ListItem } from "react-native-elements";
import { FlatList } from "react-native";

import Container from "../../../components/Container";
import Header from "../../../components/Header";
import { formatPrice } from "../../../utils/price";

// import { Container } from './styles';

const clients = [
  {
    id: 80399,
    name: "007 MOTOS PECAS E SERVICOS LTDA",
    docId: 13715241000169,
    region: "REGIAO M SÃO PAULO",
    phone: "(13) 3223-2103",
    email: "motos007.p.s@hotmail.com",
  },
  {
    id: 80400,
    name: "007 MOTOS PECAS E SERVICOS LTDA",
    docId: 13715241000169,
    region: "REGIAO M SÃO PAULO",
    phone: "(13) 3223-2103",
    email: "motos007.p.s@hotmail.com",
  },
  {
    id: 80401,
    name: "007 MOTOS PECAS E SERVICOS LTDA",
    docId: 13715241000169,
    region: "REGIAO M SÃO PAULO",
    phone: "(13) 3223-2103",
    email: "motos007.p.s@hotmail.com",
  },
  {
    id: 80402,
    name: "007 MOTOS PECAS E SERVICOS LTDA",
    docId: 13715241000169,
    region: "REGIAO M SÃO PAULO",
    phone: "(13) 3223-2103",
    email: "motos007.p.s@hotmail.com",
  },
  {
    id: 80403,
    name: "007 MOTOS PECAS E SERVICOS LTDA",
    docId: 13715241000169,
    region: "REGIAO M SÃO PAULO",
    phone: "(13) 3223-2103",
    email: "motos007.p.s@hotmail.com",
  },
  {
    id: 80404,
    name: "007 MOTOS PECAS E SERVICOS LTDA",
    docId: 13715241000169,
    region: "REGIAO M SÃO PAULO",
    phone: "(13) 3223-2103",
    email: "motos007.p.s@hotmail.com",
  },
  {
    id: 80405,
    name: "007 MOTOS PECAS E SERVICOS LTDA",
    docId: 13715241000169,
    region: "REGIAO M SÃO PAULO",
    phone: "(13) 3223-2103",
    email: "motos007.p.s@hotmail.com",
  },
];

const ClientList: React.FC = () => {
  const navigation = useNavigation();

  return (
    <Container>
      <Header
        title="Clientes"
        rightComponent={{
          icon: "add",
          onPress: () => navigation.navigate("ClientForm"),
        }}
      />
      <FlatList
        keyExtractor={(item, index) => `${item.id}`}
        data={clients}
        renderItem={({ item, index }) => (
          <ListItem
            key={index}
            bottomDivider
            onPress={() => console.log(item.name)}
          >
            <Avatar
              source={require("../../../../assets/flat-icons/contact-book.png")}
            />
            <ListItem.Content>
              <ListItem.Title numberOfLines={1}>{item.name}</ListItem.Title>
              <ListItem.Subtitle>{item.docId}</ListItem.Subtitle>
              <ListItem.Subtitle>{item.email}</ListItem.Subtitle>
              <ListItem.Subtitle>{item.phone}</ListItem.Subtitle>
            </ListItem.Content>
            <ListItem.Chevron />
          </ListItem>
        )}
      />
    </Container>
  );
};

export default ClientList;
