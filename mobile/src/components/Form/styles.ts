import { KeyboardAvoidingView, Platform } from "react-native";
import styled from "styled-components/native";

export const FormContainer = styled(KeyboardAvoidingView).attrs({
  behavior: Platform.OS === "ios" ? "padding" : "height",
})`
  justify-content: space-between;
`;

export const InnerContainer = styled.ScrollView.attrs({})`
  margin: 10px 10px;
  padding: 10px 0;

  border-radius: 8px;
  background-color: #fff;
`;
