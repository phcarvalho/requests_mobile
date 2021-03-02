import React, { FunctionComponent, ReactComponentElement } from "react";
import { RowView } from "../RowView";

import { ContentContainer, TitleText } from "./styles";

interface ContentProps {
  title?: string;
  fill?: boolean;
  center?: boolean;
  rightComponent?: React.ReactElement;
  height?: number;
}

export const Content: React.FC<ContentProps> = ({
  title,
  fill,
  rightComponent,
  center,
  children,
  height,
}) => {
  return (
    <ContentContainer fill={fill} center={center} height={height}>
      <RowView>
        {title && <TitleText>{title}</TitleText>}
        {rightComponent ?? null}
      </RowView>
      {children}
    </ContentContainer>
  );
};
