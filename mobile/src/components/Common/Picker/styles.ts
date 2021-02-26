import styled from "styled-components/native";
import { Text } from "react-native-elements";

export const PickerContainer = styled.View`
  padding: 5px 10px;
`;

export const TitleText = styled(Text)`
  font-size: 16px;

  font-weight: bold;
  color: #86939e;
`;

export const ErrorText = styled(Text)`
  padding: 5px 0 0;
  font-size: 12px;

  color: #ff1602;
`;
