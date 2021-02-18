import styled from "styled-components/native";

interface ContainerProps {
  dark?: boolean;
}

export const MainContainer = styled.View<ContainerProps>`
  flex: 1;

  background: ${({ dark }) => (dark ? "#333" : "#eee")};
`;

export interface ContentProps {
  horizontalCenter?: boolean;
  verticalCenter?: boolean;
}

export const ContentContainer = styled.View<ContentProps>`
  flex: 1;

  ${({ horizontalCenter }) => horizontalCenter && "align-items: center"};
  ${({ verticalCenter }) => verticalCenter && "justify-content: center"};
`;

export const ScrollContentContainer = styled.ScrollView<ContentProps>`
  flex: 1;

  ${({ horizontalCenter }) => horizontalCenter && "align-items: center"};
  ${({ verticalCenter }) => verticalCenter && "justify-content: center"};
`;
