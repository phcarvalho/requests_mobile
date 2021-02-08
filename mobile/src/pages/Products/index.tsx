import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import ProductList from "./List";
import ProductForm from "./Form";

const ProductStack = createStackNavigator();

const Products: React.FC = () => {
  return (
    <ProductStack.Navigator
      headerMode="none"
      initialRouteName="ProductList"
      screenOptions={{
        animationEnabled: false,
      }}
    >
      <ProductStack.Screen name="ProductList" component={ProductList} />
      <ProductStack.Screen name="ProductForm" component={ProductForm} />
    </ProductStack.Navigator>
  );
};

export default Products;
