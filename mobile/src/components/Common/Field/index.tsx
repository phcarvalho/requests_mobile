import React from "react";

import { FieldContainer, FieldDivider, TitleText, ValueText } from "./styles";

interface FieldProps {
  title?: string;
  value: string;
  first?: boolean;
  row?: boolean;
}

export const Field: React.FC<FieldProps> = ({ title, value, first, row }) => {
  return (
    <FieldContainer first={first} row={row}>
      {title && <TitleText>{title}</TitleText>}
      <ValueText>{value}</ValueText>
      <FieldDivider />
    </FieldContainer>
  );
};
