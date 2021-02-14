import React, { useState } from "react";
import { useNavigation } from "@react-navigation/native";
import { Formik } from "formik";
import * as yup from "yup";

import Header from "../../../components/Header";
import Container from "../../../components/Container";

import { Button, Input } from "react-native-elements";

import Form from "../../../components/Form";
import MaskedInput from "../../../components/MaskedInput";

interface ClientValues {
  name: string;
  phonePersonal: string;
  phoneCommercial: string;
  email: string;
  city: string;
  state: string;
}

const clientInitialValues: ClientValues = {
  name: "",
  phonePersonal: "",
  phoneCommercial: "",
  email: "",
  city: "",
  state: "",
};

const clientSchema = yup.object().shape({
  name: yup
    .string()
    .min(2, "Nome muito pequeno")
    .required("* Campo obrigatório"),
  email: yup.string().email("Email inválido").required("* Campo obrigatório"),
  phonePersonal: yup.string().required("* Campo obrigatório"),
  phoneCommercial: yup.string().required("* Campo obrigatório"),
  city: yup.string(),
  state: yup.string(),
});

const ClientForm: React.FC = () => {
  const navigation = useNavigation();

  const handleSubmit = async (values: ClientValues) => {
    console.log(values);
  };

  return (
    <Container>
      <Header
        title="Novo Cliente"
        rightComponent={{
          icon: "close",
          onPress: () => navigation.goBack(),
        }}
      />

      <Form>
        <Formik
          initialValues={clientInitialValues}
          onSubmit={(values) => handleSubmit(values)}
          validationSchema={clientSchema}
        >
          {({ handleChange, handleSubmit, values, touched, errors }) => (
            <>
              <Input
                label="Nome"
                placeholder="Nome do contato"
                value={values.name}
                onChangeText={handleChange("name")}
                errorMessage={touched.name && errors.name ? errors.name : ""}
              />
              <MaskedInput
                label="Telefone Pessoal"
                placeholder="(xx) xxxxx-xxxx"
                value={values.phonePersonal}
                onChangeText={handleChange("phonePersonal")}
                mask="(##) #####-####"
                errorMessage={
                  touched.phonePersonal && errors.phonePersonal
                    ? errors.phonePersonal
                    : ""
                }
              />
              <MaskedInput
                label="Telefone Comercial"
                placeholder="(xx) xxxxx-xxxx"
                value={values.phoneCommercial}
                onChangeText={handleChange("phoneCommercial")}
                mask="(##) #####-####"
                errorMessage={
                  touched.phoneCommercial && errors.phoneCommercial
                    ? errors.phoneCommercial
                    : ""
                }
              />
              <Input
                label="E-mail"
                placeholder="nome@email.com.br"
                value={values.email}
                onChangeText={handleChange("email")}
                errorMessage={touched.email && errors.email ? errors.email : ""}
              />
              <Input
                label="Cidade"
                placeholder="Nome da Cidade"
                value={values.city}
                onChangeText={handleChange("city")}
                errorMessage={touched.city && errors.city ? errors.city : ""}
              />
              <Input
                label="Estado"
                placeholder="Nome do Estado"
                value={values.state}
                onChangeText={handleChange("state")}
                errorMessage={touched.state && errors.state ? errors.state : ""}
              />
              <Button title="Criar" onPress={() => handleSubmit()} />
            </>
          )}
        </Formik>
      </Form>
    </Container>
  );
};

export default ClientForm;
