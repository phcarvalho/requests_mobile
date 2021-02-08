import React from "react";
import { useNavigation } from "@react-navigation/native";
import { Avatar, ListItem } from "react-native-elements";
import { FlatList } from "react-native";

import Container from "../../../components/Container";
import Header from "../../../components/Header";

// import { Container } from './styles';

const products = [
  {
    name: "Product 1",
    subtitle: "R$ 15,50",
  },
  {
    name: "Product 2",
    subtitle: "R$ 15,50",
  },
  {
    name: "Product 3",
    subtitle: "R$ 15,50",
  },
  {
    name: "Product 4",
    subtitle: "R$ 15,50",
  },
  {
    name: "Product 5",
    subtitle: "R$ 15,50",
  },
];

const ProductList: React.FC = () => {
  const navigation = useNavigation();

  return (
    <Container>
      <Header
        title="Produtos"
        rightComponent={{
          icon: "add",
          onPress: () => navigation.navigate("ProductForm"),
        }}
      />
      <FlatList
        keyExtractor={(item, index) => item.name}
        data={products}
        renderItem={({ item, index }) => (
          <ListItem
            key={index}
            bottomDivider
            onPress={() => console.log(item.name)}
          >
            <Avatar source={require("../../../../assets/flat-icons/box.png")} />
            <ListItem.Content>
              <ListItem.Title>{item.name}</ListItem.Title>
              <ListItem.Subtitle>{item.subtitle}</ListItem.Subtitle>
            </ListItem.Content>
            <ListItem.Chevron />
          </ListItem>
        )}
      />
    </Container>
  );
};

export default ProductList;
