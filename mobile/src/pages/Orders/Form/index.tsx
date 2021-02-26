import React from "react";
import { Formik } from "formik";
import { Button, Input } from "react-native-elements";
import { useNavigation } from "@react-navigation/native";
import * as yup from "yup";

import { Container, Form, FormContent } from "../../../components/Common";

interface OrderValues {
  date: Date;
  client: string;
  description: string;
}

const orderInitialValues = {
  date: new Date(),
  client: "",
  description: "",
};

const orderSchema = yup.object().shape({
  date: yup.date().required("* Campo obrigatório"),
  client: yup.string().required("* Campo obrigatório"),
  description: yup.string(),
});

const OrderForm: React.FC = () => {
  const navigation = useNavigation();

  const handleFormSubmit = (values: OrderValues) => {
    console.log(values);
  };

  return (
    <Container
      header={{
        title: "Novo Pedido",
        rightComponent: {
          icon: "close",
          onPress: () => navigation.goBack(),
        },
      }}
    >
      <Form>
        <Formik
          initialValues={orderInitialValues}
          onSubmit={(values) => handleFormSubmit(values)}
          validationSchema={orderSchema}
        >
          {({
            handleChange,
            handleSubmit,
            setFieldValue,
            values,
            touched,
            errors,
          }) => (
            <>
              <FormContent>
                <Input
                  label="Descrição da Visita"
                  placeholder="Descrição"
                  value={values.description}
                  onChangeText={handleChange("description")}
                  errorMessage={
                    touched.description && errors.description
                      ? errors.description
                      : ""
                  }
                />
              </FormContent>
              <Button title="Criar" onPress={() => handleSubmit()} />
            </>
          )}
        </Formik>
      </Form>
    </Container>
  );
};

export default OrderForm;
