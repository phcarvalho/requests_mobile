import styled from "styled-components/native";
import { Text } from "react-native-elements";

interface ContentContainerProps {
  center?: boolean;
  fill?: boolean;
}

export const TitleText = styled(Text)`
  font-size: 20px;
  color: #cdcdcd;
  font-weight: bold;

  margin-bottom: 5px;
`;

export const ContentContainer = styled.View<ContentContainerProps>`
  margin: 10px;
  padding: 12px;
  border-radius: 8px;

  ${({ fill }) => (fill ? "flex: 1" : "")};

  background: #fff;

  justify-content: ${({ center }) => (center ? "center" : "flex-start")};
`;
