import React from "react";
import { useNavigation } from "@react-navigation/native";
import { Avatar, ListItem } from "react-native-elements";
import { FlatList } from "react-native";

import Container from "../../../components/Container";
import Header from "../../../components/Header";
import { formatPrice } from "../../../utils/price";

// import { Container } from './styles';

const products = [
  {
    id: "FAR-09AM",
    name: "FAROL COM CARENAGEM OFF ROAD UNIVERSAL - SEM LAMPADA",
    unit: "UN",
  },
  {
    id: "FAR-10AM",
    name: "FAROL COM CARENAGEM OFF ROAD UNIVERSAL - SEM LAMPADA",
    unit: "UN",
  },
  {
    id: "FAR-11AM",
    name: "FAROL COM CARENAGEM OFF ROAD UNIVERSAL - SEM LAMPADA",
    unit: "UN",
  },
  {
    id: "FAR-12AM",
    name: "FAROL COM CARENAGEM OFF ROAD UNIVERSAL - SEM LAMPADA",
    unit: "UN",
  },
  {
    id: "FAR-13AM",
    name: "FAROL COM CARENAGEM OFF ROAD UNIVERSAL - SEM LAMPADA",
    unit: "UN",
  },
  {
    id: "FAR-14AM",
    name: "FAROL COM CARENAGEM OFF ROAD UNIVERSAL - SEM LAMPADA",
    unit: "UN",
  },
  {
    id: "FAR-15AM",
    name: "FAROL COM CARENAGEM OFF ROAD UNIVERSAL - SEM LAMPADA",
    unit: "UN",
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
        keyExtractor={(item, index) => item.id}
        data={products}
        renderItem={({ item, index }) => (
          <ListItem
            key={index}
            bottomDivider
            onPress={() => console.log(item.name)}
          >
            <Avatar source={require("../../../../assets/flat-icons/box.png")} />
            <ListItem.Content>
              <ListItem.Title numberOfLines={1}>{item.name}</ListItem.Title>
              <ListItem.Subtitle>
                {item.id} - Unidade: {item.unit}
              </ListItem.Subtitle>
            </ListItem.Content>
            <ListItem.Chevron />
          </ListItem>
        )}
      />
    </Container>
  );
};

export default ProductList;
