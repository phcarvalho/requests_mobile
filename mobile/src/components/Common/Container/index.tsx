import React from "react";
import Header, { HeaderProps } from "../../Header";

import {
  ContentContainer,
  ContentProps,
  MainContainer,
  ScrollContentContainer,
} from "./styles";

interface ContainerProps {
  header?: HeaderProps;
  verticalCenter?: boolean;
  horizontalCenter?: boolean;
  scroll?: boolean;
  dark?: boolean;
}

export const Container: React.FC<ContainerProps> = ({
  header,
  verticalCenter,
  horizontalCenter,
  scroll,
  dark,
  children,
}) => {
  return (
    <MainContainer dark={dark}>
      {header && <Header {...header} />}
      {scroll ? (
        <ScrollContentContainer
          verticalCenter={verticalCenter}
          horizontalCenter={horizontalCenter}
        >
          {children}
        </ScrollContentContainer>
      ) : (
        <ContentContainer
          verticalCenter={verticalCenter}
          horizontalCenter={horizontalCenter}
        >
          {children}
        </ContentContainer>
      )}
    </MainContainer>
  );
};
