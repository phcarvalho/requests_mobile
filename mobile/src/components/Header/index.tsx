import { DrawerActions, useNavigation } from "@react-navigation/native";
import React from "react";
import { Header as HeaderRNE } from "react-native-elements";
// import { Container } from './styles';

export interface HeaderProps {
  title: string;
  rightComponent?:
    | React.ReactElement
    | {
        icon?: string;
        color?: string;
        onPress?: () => void;
      };
}

const Header: React.FC<HeaderProps> = ({ title, rightComponent }) => {
  const navigation = useNavigation();

  return (
    <HeaderRNE
      leftComponent={{
        icon: "menu",
        onPress: () => navigation.dispatch(DrawerActions.openDrawer()),
      }}
      centerComponent={{ text: title }}
      rightComponent={rightComponent}
    />
  );
};

export default Header;
