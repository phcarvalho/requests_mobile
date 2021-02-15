import styled from "styled-components/native";

interface ContainerProps {
  centerContent?: boolean;
  dark?: boolean;
}

export const Container = styled.View<ContainerProps>`
  flex: 1;

  background: ${({ dark }) => (dark ? "#333" : "#fff")};

  justify-content: ${({ centerContent }) =>
    centerContent ? "center" : "flex-start"};
`;
