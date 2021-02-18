import React from "react";
import { Image } from "react-native";
import {
  DrawerContentComponentProps,
  DrawerContentScrollView,
  DrawerItemList,
} from "@react-navigation/drawer";

import SyncBar from "../../../components/SyncBar";

import { DrawerContainer, LogoContainer } from "./styles";

const CustomDrawerContent: React.FC<DrawerContentComponentProps> = (props) => {
  const { navigation } = props;

  return (
    <DrawerContainer style={{ flex: 1 }}>
      <LogoContainer onPress={() => navigation.navigate("Home")}>
        <Image
          source={require("../../../../assets/logo_transparent.png")}
          style={{
            width: "100%",
            height: 0,
            flex: 1,
          }}
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
