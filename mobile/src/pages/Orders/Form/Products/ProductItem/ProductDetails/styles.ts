import styled from "styled-components/native";
import { Text } from "react-native-elements";

export const Header = styled.View``;

export const HeaderContent = styled.View`
  flex-direction: row;
  justify-content: space-between;
`;

export const HeaderText = styled(Text)`
  font-size: 18px;
  font-weight: bold;
  margin: 10px 10px 20px;

  color: #666;
`;
