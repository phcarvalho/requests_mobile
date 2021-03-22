import { Text } from "react-native-elements";
import styled from "styled-components/native";

export const ErrorText = styled(Text)`
  padding: 5px 0 0;
  font-size: 12px;
  text-align: center;

  color: #ff1602;
`;

export const QtyContainer = styled.View`
  flex-direction: column;
  justify-content: space-between;

  margin: 0 10px;
`;

export const NoProductContainer = styled.View`
  align-items: center;
  justify-content: center;

  flex: 1;
`;

export const NoProductText = styled(Text)`
  color: #999;
  font-size: 20px;
`;
