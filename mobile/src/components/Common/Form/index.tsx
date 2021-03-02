import React from "react";
import { Keyboard, TouchableWithoutFeedback, ScrollView } from "react-native";

import { FormContainer, InnerContainer, TitleText } from "./styles";

interface FormContentProps {
  title?: string;
}

export const Form: React.FC = ({ children }) => {
  return (
    <FormContainer>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <ScrollView>{children}</ScrollView>
      </TouchableWithoutFeedback>
    </FormContainer>
  );
};

export const FormContent: React.FC<FormContentProps> = ({
  title,
  children,
}) => {
  return (
    <InnerContainer>
      {title && <TitleText>{title}</TitleText>}
      {children}
    </InnerContainer>
  );
};
