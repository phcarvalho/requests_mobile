import { useFormikContext } from "formik";
import React from "react";
import { View } from "react-native";
import { Input } from "react-native-elements";
import { Container, FormContent, RowView } from "../../../../components/Common";
import MaskedInput from "../../../../components/MaskedInput";
import { ClientValues } from "../types";

// import { Container } from './styles';

const ClientFormContact: React.FC = () => {
  const {
    values,
    setFieldValue,
    handleChange,
    touched,
    errors,
  } = useFormikContext<ClientValues>();

  return (
    <Container scroll>
      <FormContent title="Contato">
        <RowView>
          <MaskedInput
            label="Telefone"
            placeholder="(xx) xxxx-xxxx"
            value={values.phone}
            onChangeText={handleChange("phone")}
            mask="(##) ####-####"
            errorMessage={touched.phone && errors.phone ? errors.phone : ""}
          />
          <MaskedInput
            label="Telefone 2"
            placeholder="(xx) xxxx-xxxx"
            value={values.phone2}
            onChangeText={handleChange("phone2")}
            mask="(##) ####-####"
            errorMessage={touched.phone2 && errors.phone2 ? errors.phone2 : ""}
          />
        </RowView>
        <MaskedInput
          label="Celular"
          placeholder="(xx) xxxxx-xxxx"
          value={values.cellphone}
          onChangeText={handleChange("cellphone")}
          mask="(##) #####-####"
          errorMessage={
            touched.cellphone && errors.cellphone ? errors.cellphone : ""
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
          label="E-mail 2"
          placeholder="nome@email.com.br"
          value={values.email2}
          onChangeText={handleChange("email2")}
          errorMessage={touched.email2 && errors.email2 ? errors.email2 : ""}
        />
      </FormContent>
    </Container>
  );
};

export default ClientFormContact;
