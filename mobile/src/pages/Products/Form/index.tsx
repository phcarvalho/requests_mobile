import { useNavigation } from "@react-navigation/native";
import React from "react";
import { View } from "react-native";
import Header from "../../../components/Header";

// import { Container } from './styles';

const ProductForm: React.FC = () => {
  const navigation = useNavigation();

  return (
    <View>
      <Header
        title="Novo Produto"
        rightComponent={{
          icon: "close",
          onPress: () => navigation.goBack(),
        }}
      />
    </View>
  );
};

export default ProductForm;
