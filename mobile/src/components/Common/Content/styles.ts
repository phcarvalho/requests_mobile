import styled from "styled-components/native";
import { Text } from "react-native-elements";

interface ContentContainerProps {
  center?: boolean;
  fill?: boolean;
  height?: number;
}

export const TitleText = styled(Text)`
  flex: 1;

  color: #cdcdcd;
  font-size: 20px;
  font-weight: bold;

  margin-bottom: 5px;
`;

export const ContentContainer = styled.View<ContentContainerProps>`
  margin: 10px;
  padding: 12px;
  border-radius: 8px;

  ${({ fill }) => (fill ? "flex: 1" : "")};

  ${({ height }) => (height ? "height: 400px;" : "")};

  background: #fff;

  justify-content: ${({ center }) => (center ? "center" : "flex-start")};
`;
