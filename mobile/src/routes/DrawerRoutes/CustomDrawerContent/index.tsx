import React from "react";
import { Avatar, Text } from "react-native-elements";
import {
  DrawerContentComponentProps,
  DrawerContentScrollView,
  DrawerItemList,
} from "@react-navigation/drawer";

import { DrawerContainer, LogoContainer } from "./styles";
import SyncBar from "../../../components/SyncBar";

const CustomDrawerContent: React.FC<DrawerContentComponentProps> = (props) => {
  const { navigation } = props;

  return (
    <DrawerContainer style={{ flex: 1 }}>
      <LogoContainer onPress={() => navigation.navigate("Home")}>
        <Avatar
          source={require("../../../../assets/icon.png")}
          rounded
          size={80}
        />
      </LogoContainer>
      <DrawerContentScrollView contentContainerStyle={{ flex: 1 }} {...props}>
        <DrawerItemList
          {...props}
          activeTintColor="#666"
          inactiveTintColor="#666"
          activeBackgroundColor="#eee"
        />
      </DrawerContentScrollView>
      <SyncBar />
    </DrawerContainer>
  );
};

export default CustomDrawerContent;
