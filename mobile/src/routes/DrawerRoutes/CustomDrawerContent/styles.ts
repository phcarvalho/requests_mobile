import styled from "styled-components/native";
import Constants from "expo-constants";

export const DrawerContainer = styled.View`
  padding-top: ${Constants.statusBarHeight}px;
  flex: 1;
`;

export const LogoContainer = styled.TouchableOpacity`
  align-items: center;
  justify-content: center;
  height: 100px;
`;
