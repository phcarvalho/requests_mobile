import React from "react";
import { useFormikContext } from "formik";
import { Input } from "react-native-elements";

import {
  Container,
  Form,
  FormContent,
  Picker,
} from "../../../../components/Common";
import MaskedInput from "../../../../components/MaskedInput";

import { clientTypes, ClientValues } from "../types";

const ClientFormInfo: React.FC = () => {
  const {
    values,
    setFieldValue,
    handleChange,
    touched,
    errors,
  } = useFormikContext<ClientValues>();

  return (
    <Container scroll>
      <Form>
        <FormContent title="Informações do Cliente">
          <Picker
            title="Tipo de Cliente"
            items={clientTypes}
            selectedValue={values.clientType}
            onValueChange={(itemValue) =>
              setFieldValue("clientType", itemValue)
            }
            errorMessage={
              touched.clientType && errors.clientType ? errors.clientType : ""
            }
          />
          <Input
            label={values.clientType === "Jurídica" ? "Razão Social" : "Nome"}
            placeholder={
              values.clientType === "Jurídica" ? "Razão Social" : "Nome"
            }
            value={values.name}
            onChangeText={handleChange("name")}
            errorMessage={touched.name && errors.name ? errors.name : ""}
          />
          <Input
            label={
              values.clientType === "Jurídica" ? "Nome Fantasia" : "Apelido"
            }
            placeholder={
              values.clientType === "Jurídica" ? "Nome Fantasia" : "Apelido"
            }
            value={values.fantasyName}
            onChangeText={handleChange("fantasyName")}
            errorMessage={
              touched.fantasyName && errors.fantasyName
                ? errors.fantasyName
                : ""
            }
          />
          {values.clientType === "Jurídica" ? (
            <>
              <MaskedInput
                label={"CNPJ"}
                placeholder="XX.XXX.XXX/XXXX-XX"
                value={values.cnpjCPF}
                onChangeText={handleChange("cnpjCPF")}
                mask="##.###.###/####-##"
                errorMessage={
                  touched.cnpjCPF && errors.cnpjCPF ? errors.cnpjCPF : ""
                }
              />
              <Input
                label="Inscrição Estadual"
                placeholder="Inscrição Estadual"
                value={values.ieRG}
                onChangeText={handleChange("ieRG")}
                errorMessage={touched.ieRG && errors.ieRG ? errors.ieRG : ""}
              />
            </>
          ) : (
            <>
              <MaskedInput
                label="CPF"
                placeholder="XXX.XXX.XXX-XX"
                value={values.cnpjCPF}
                onChangeText={handleChange("cnpjCPF")}
                mask="###.###.###-##"
                errorMessage={
                  touched.cnpjCPF && errors.cnpjCPF ? errors.cnpjCPF : ""
                }
              />
              <Input
                label="RG"
                placeholder="Número do RG"
                value={values.ieRG}
                onChangeText={handleChange("ieRG")}
                errorMessage={touched.ieRG && errors.ieRG ? errors.ieRG : ""}
              />
            </>
          )}
          <Input
            label="Lista de Preço"
            placeholder="Lista de Preço"
            value={values.priceList}
            onChangeText={handleChange("priceList")}
            errorMessage={
              touched.priceList && errors.priceList ? errors.priceList : ""
            }
          />
        </FormContent>
      </Form>
    </Container>
  );
};

export default ClientFormInfo;
