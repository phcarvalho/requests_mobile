import React from "react";
import { useNavigation } from "@react-navigation/native";
import { Button, Input } from "react-native-elements";
import { Formik } from "formik";
import * as yup from "yup";

import {
  Form,
  Container,
  Picker,
  PickerItem,
  FormContent,
} from "../../../components/Common";
import MaskedInput from "../../../components/MaskedInput";

interface ClientValues {
  clientType: "Física" | "Jurídica";
  name: string;
  fantasyName: string;
  cnpjCPF: string;
  ieRG: string;
  phone: string;
  phone2: string;
  cellphone: string;
  email: string;
  email2: string;
  region: string;
  city: string;
  state: string;
  zipcode: string;
  district: string;
  address: string;
  address2: string;
  priceList: string;
}

const clientInitialValues: ClientValues = {
  clientType: "Jurídica",
  name: "",
  fantasyName: "",
  cnpjCPF: "",
  ieRG: "",
  phone: "",
  phone2: "",
  cellphone: "",
  email: "",
  email2: "",
  city: "",
  state: "",
  region: "",
  district: "",
  zipcode: "",
  address: "",
  address2: "",
  priceList: "",
};

const clientSchema = yup.object().shape({
  name: yup
    .string()
    .min(2, "Nome muito pequeno")
    .required("* Campo obrigatório"),
  fantasyName: yup.string(),
  cnpjCPF: yup.string(),
  ieRG: yup.string(),
  phone: yup.string(),
  phone2: yup.string(),
  cellphone: yup.string(),
  email: yup.string().email("Email inválido").required("* Campo obrigatório"),
  email2: yup.string().email("Email inválido"),
  city: yup.string(),
  state: yup.string(),
  region: yup.string(),
  district: yup.string(),
  zipcode: yup.string(),
  address: yup.string(),
  address2: yup.string(),
  clientType: yup.string(),
  priceList: yup.string(),
});

const clientTypes: PickerItem[] = [
  {
    label: "Jurídica",
    value: "Jurídica",
  },
  {
    label: "Física",
    value: "Física",
  },
];

const ClientForm: React.FC = () => {
  const navigation = useNavigation();

  const handleFormSubmit = async (values: ClientValues) => {
    const {} = values;

    console.log(values);
  };

  return (
    <Container
      header={{
        title: "Novo Cliente",
        rightComponent: {
          icon: "close",
          onPress: () => navigation.goBack(),
        },
      }}
    >
      <Form>
        <Formik
          initialValues={clientInitialValues}
          onSubmit={(values) => handleFormSubmit(values)}
          validationSchema={clientSchema}
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
              <FormContent title="Informações">
                <Picker
                  title="Tipo de Cliente"
                  items={clientTypes}
                  selectedValue={values.clientType}
                  onValueChange={(itemValue) =>
                    setFieldValue("clientType", itemValue)
                  }
                  errorMessage={
                    touched.clientType && errors.clientType
                      ? errors.clientType
                      : ""
                  }
                />
                <Input
                  label={
                    values.clientType === "Jurídica" ? "Razão Social" : "Nome"
                  }
                  placeholder={
                    values.clientType === "Jurídica" ? "Razão Social" : "Nome"
                  }
                  value={values.name}
                  onChangeText={handleChange("name")}
                  errorMessage={touched.name && errors.name ? errors.name : ""}
                />
                <Input
                  label={
                    values.clientType === "Jurídica"
                      ? "Nome Fantasia"
                      : "Apelido"
                  }
                  placeholder={
                    values.clientType === "Jurídica"
                      ? "Nome Fantasia"
                      : "Apelido"
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
                      errorMessage={
                        touched.ieRG && errors.ieRG ? errors.ieRG : ""
                      }
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
                      errorMessage={
                        touched.ieRG && errors.ieRG ? errors.ieRG : ""
                      }
                    />
                  </>
                )}
                <Input
                  label="Lista de Preço"
                  placeholder="Lista de Preço"
                  value={values.priceList}
                  onChangeText={handleChange("priceList")}
                  errorMessage={
                    touched.priceList && errors.priceList
                      ? errors.priceList
                      : ""
                  }
                />
              </FormContent>
              <FormContent title="Contato">
                <MaskedInput
                  label="Telefone"
                  placeholder="(xx) xxxx-xxxx"
                  value={values.phone}
                  onChangeText={handleChange("phone")}
                  mask="(##) ####-####"
                  errorMessage={
                    touched.phone && errors.phone ? errors.phone : ""
                  }
                />
                <MaskedInput
                  label="Telefone 2"
                  placeholder="(xx) xxxx-xxxx"
                  value={values.phone2}
                  onChangeText={handleChange("phone2")}
                  mask="(##) ####-####"
                  errorMessage={
                    touched.phone2 && errors.phone2 ? errors.phone2 : ""
                  }
                />
                <MaskedInput
                  label="Celular"
                  placeholder="(xx) xxxxx-xxxx"
                  value={values.cellphone}
                  onChangeText={handleChange("cellphone")}
                  mask="(##) #####-####"
                  errorMessage={
                    touched.cellphone && errors.cellphone
                      ? errors.cellphone
                      : ""
                  }
                />
                <Input
                  label="E-mail"
                  placeholder="nome@email.com.br"
                  value={values.email}
                  onChangeText={handleChange("email")}
                  errorMessage={
                    touched.email && errors.email ? errors.email : ""
                  }
                />
                <Input
                  label="E-mail 2"
                  placeholder="nome@email.com.br"
                  value={values.email2}
                  onChangeText={handleChange("email2")}
                  errorMessage={
                    touched.email2 && errors.email2 ? errors.email2 : ""
                  }
                />
              </FormContent>
              <FormContent title="Endereço">
                <Input
                  label="Estado"
                  placeholder="Nome do Estado"
                  value={values.state}
                  onChangeText={handleChange("state")}
                  errorMessage={
                    touched.state && errors.state ? errors.state : ""
                  }
                />
                <Input
                  label="Cidade"
                  placeholder="Nome da Cidade"
                  value={values.city}
                  onChangeText={handleChange("city")}
                  errorMessage={touched.city && errors.city ? errors.city : ""}
                />
                <Input
                  label="Região"
                  placeholder="Nome da Região"
                  value={values.region}
                  onChangeText={handleChange("region")}
                  errorMessage={
                    touched.region && errors.region ? errors.region : ""
                  }
                />
                <Input
                  label="Endereço"
                  placeholder="Endereço"
                  value={values.address}
                  onChangeText={handleChange("address")}
                  errorMessage={
                    touched.address && errors.address ? errors.address : ""
                  }
                />
                <Input
                  label="Complemento"
                  placeholder="Complemento"
                  value={values.address2}
                  onChangeText={handleChange("address2")}
                  errorMessage={
                    touched.address2 && errors.address2 ? errors.address2 : ""
                  }
                />
                <Input
                  label="Bairro"
                  placeholder="Bairro"
                  value={values.district}
                  onChangeText={handleChange("district")}
                  errorMessage={
                    touched.district && errors.district ? errors.district : ""
                  }
                />
                <MaskedInput
                  label="CEP"
                  placeholder="CEP"
                  value={values.zipcode}
                  onChangeText={handleChange("zipcode")}
                  mask="#####-###"
                  errorMessage={
                    touched.zipcode && errors.zipcode ? errors.zipcode : ""
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

export default ClientForm;
