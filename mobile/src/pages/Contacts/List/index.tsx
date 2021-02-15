import React from "react";
import { FlatList } from "react-native";
import { Avatar, ListItem } from "react-native-elements";
import { useNavigation } from "@react-navigation/native";

import Header from "../../../components/Header";
import { Container } from "../../../components/Common";

const contacts = [
  {
    id: 1,
    name: "João da Silva",
    phone: "(41) 99999-9999",
    email: "joaodasilva@gmail.com",
  },
  {
    id: 2,
    name: "João da Silva",
    phone: "(41) 99999-9999",
    email: "joaodasilva@gmail.com",
  },
  {
    id: 3,
    name: "João da Silva",
    phone: "(41) 99999-9999",
    email: "joaodasilva@gmail.com",
  },
  {
    id: 4,
    name: "João da Silva",
    phone: "(41) 99999-9999",
    email: "joaodasilva@gmail.com",
  },
  {
    id: 5,
    name: "João da Silva",
    phone: "(41) 99999-9999",
    email: "joaodasilva@gmail.com",
  },
  {
    id: 6,
    name: "João da Silva",
    phone: "(41) 99999-9999",
    email: "joaodasilva@gmail.com",
  },
  {
    id: 7,
    name: "João da Silva",
    phone: "(41) 99999-9999",
    email: "joaodasilva@gmail.com",
  },
  {
    id: 8,
    name: "João da Silva",
    phone: "(41) 99999-9999",
    email: "joaodasilva@gmail.com",
  },
  {
    id: 9,
    name: "João da Silva",
    phone: "(41) 99999-9999",
    email: "joaodasilva@gmail.com",
  },
];

const ContactList: React.FC = () => {
  const navigation = useNavigation();

  return (
    <Container>
      <Header
        title="Contatos"
        rightComponent={{
          icon: "add",
          onPress: () => navigation.navigate("ContactForm"),
        }}
      />
      <FlatList
        keyExtractor={(item) => item.id.toString()}
        data={contacts}
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
              <ListItem.Title>{item.name}</ListItem.Title>
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

export default ContactList;
