import React from "react";
import { Image, Text } from "react-native";
import {
  DrawerContentComponentProps,
  DrawerContentScrollView,
  DrawerItemList,
} from "@react-navigation/drawer";

import { LogoContainer } from "./styles";

const CustomDrawerContent: React.FC<DrawerContentComponentProps> = (props) => {
  const { navigation } = props;

  return (
    <DrawerContentScrollView {...props}>
      <LogoContainer onPress={() => navigation.navigate("Home")}>
        <Text>Home</Text>
      </LogoContainer>
      <DrawerItemList
        {...props}
        activeTintColor="#666"
        inactiveTintColor="#666"
        activeBackgroundColor="#eee"
      />
    </DrawerContentScrollView>
  );
};

export default CustomDrawerContent;
