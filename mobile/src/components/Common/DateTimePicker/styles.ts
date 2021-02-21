import styled from "styled-components/native";
import { Text } from "react-native-elements";

export const DTPickerContainer = styled.View`
  padding: 0 10px;
`;

export const DateText = styled(Text)`
  font-size: 18px;
  padding: 10px 0;
`;

export const TitleText = styled(Text)`
  font-size: 16px;

  font-weight: bold;
  color: #86939e;
`;

export const ErrorText = styled(Text)`
  padding: 5px;
  font-size: 12px;

  color: #ff1602;
`;
