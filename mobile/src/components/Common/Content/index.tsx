import React from "react";

import { ContentContainer, TitleText } from "./styles";

interface ContentProps {
  title?: string;
  fill?: boolean;
  center?: boolean;
}

export const Content: React.FC<ContentProps> = ({
  title,
  fill,
  center,
  children,
}) => {
  return (
    <ContentContainer fill={fill} center={center}>
      {title && <TitleText>{title}</TitleText>}
      {children}
    </ContentContainer>
  );
};
