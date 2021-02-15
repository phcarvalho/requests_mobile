import React, { createRef, useRef } from "react";
import { Keyboard, StatusBar } from "react-native";
import { Formik } from "formik";
import { Avatar, Button, Input, Text } from "react-native-elements";
import * as yup from "yup";

import { Container, Form } from "../../components/Common";

import { ErrorText, LoginContainer, LogoContainer } from "./styles";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../stores/modules/rootReducer";
import { login } from "../../stores/modules/auth";

interface LoginValues {
  userName: string;
  password: string;
}

const loginInitialValues: LoginValues = {
  userName: "",
  password: "",
};

const loginSchema = yup.object().shape({
  userName: yup.string().required("* Campo obrigatório"),
  password: yup.string().required("* Campo obrigatório"),
});

const Login: React.FC = () => {
  const { error, loading } = useSelector((state: RootState) => state.auth);

  const passwordRef = createRef<Input>();

  const dispatch = useDispatch();

  const handleFormSubmit = (values: LoginValues) => {
    const { userName, password } = values;

    Keyboard.dismiss();

    dispatch(login(userName, password));
  };

  return (
    <Container centerContent dark>
      <StatusBar backgroundColor="#333" barStyle="light-content" />
      <LoginContainer>
        <LogoContainer>
          <Avatar
            size={100}
            rounded
            source={require("../../../assets/icon.png")}
          />
        </LogoContainer>
        <Form>
          <ErrorText>{error}</ErrorText>
          <Formik
            initialValues={loginInitialValues}
            onSubmit={(values) => handleFormSubmit(values)}
            validationSchema={loginSchema}
          >
            {({ handleChange, handleSubmit, values, touched, errors }) => (
              <>
                <Input
                  label="Usuário"
                  placeholder="Digite seu usuário"
                  value={values.userName}
                  onChangeText={handleChange("userName")}
                  autoCapitalize="none"
                  autoCorrect={false}
                  errorMessage={
                    touched.userName && errors.userName ? errors.userName : ""
                  }
                  returnKeyType="next"
                  onSubmitEditing={() => passwordRef?.current?.focus()}
                  blurOnSubmit={false}
                />
                <Input
                  label="Senha"
                  placeholder="Digite sua senha"
                  value={values.password}
                  onChangeText={handleChange("password")}
                  autoCapitalize="none"
                  autoCorrect={false}
                  secureTextEntry
                  errorMessage={
                    touched.password && errors.password ? errors.password : ""
                  }
                  onSubmitEditing={() => handleSubmit()}
                  ref={passwordRef}
                />
                <Button
                  title="Entrar"
                  onPress={() => handleSubmit()}
                  loading={loading}
                />
              </>
            )}
          </Formik>
        </Form>
      </LoginContainer>
    </Container>
  );
};

export default Login;
