import React from "react";
import { Keyboard, TouchableWithoutFeedback } from "react-native";

import { FormContainer, InnerContainer } from "./styles";

const Form: React.FC = ({ children }) => {
  return (
    <FormContainer>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <InnerContainer>{children}</InnerContainer>
      </TouchableWithoutFeedback>
    </FormContainer>
  );
};

export default Form;
