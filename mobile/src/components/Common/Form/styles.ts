import { KeyboardAvoidingView, Platform } from "react-native";
import { Text } from "react-native-elements";
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

export const TitleText = styled(Text)`
  margin-left: 10px;
  font-size: 20px;
  color: #cdcdcd;
  font-weight: bold;

  margin-bottom: 5px;
`;
