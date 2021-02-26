import React, { createRef } from "react";
import { Keyboard, StatusBar, Image } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { Avatar, Button, Input } from "react-native-elements";
import { Formik } from "formik";
import * as yup from "yup";

import { RootState } from "../../stores/modules/rootReducer";
import { login } from "../../stores/modules/auth";

import { Container, Form, FormContent } from "../../components/Common";

import { ErrorText, LoginContainer, LogoContainer } from "./styles";

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
    <Container verticalCenter>
      <StatusBar backgroundColor="#333" barStyle="light-content" />
      <LoginContainer>
        <LogoContainer>
          <Image
            source={require("../../../assets/logo_transparent.png")}
            style={{
              width: "90%",
              height: 0,
              flex: 1,
            }}
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
              <FormContent>
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
              </FormContent>
            )}
          </Formik>
        </Form>
      </LoginContainer>
    </Container>
  );
};

export default Login;
