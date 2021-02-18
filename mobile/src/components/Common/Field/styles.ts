import styled from "styled-components/native";
import { Divider, Text } from "react-native-elements";

interface FieldContainerProps {
  first?: boolean;
  row?: boolean;
}

export const FieldContainer = styled.View<FieldContainerProps>`
  margin-top: ${({ first }) => (first ? 0 : 10)}px;

  ${({ row }) => row && "flex: 1"};
`;

export const TitleText = styled(Text)`
  font-size: 14px;

  font-weight: bold;
  color: #97a2ac;
`;

export const ValueText = styled(Text)`
  font-size: 16px;

  margin-top: 2px;
  color: #333;
`;

export const FieldDivider = styled(Divider)`
  margin: 2px 4px 0;
`;
