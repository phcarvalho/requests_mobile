import React, { ReactNode } from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { MaterialIcons, MaterialCommunityIcons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { Formik } from "formik";
import * as yup from "yup";

import { Container } from "../../../components/Common";

import { clientTypes, ClientValues } from "./types";
import { states } from "../../../types/address";

import ClientFormInfo from "./Info";
import ClientFormContact from "./Contact";
import ClientFormAddress from "./Address";
import { ClientAPICreation, ClientType } from "../../../types/clients";
import { useSelector } from "react-redux";
import { RootState } from "../../../stores/modules/rootReducer";

const clientInitialValues: ClientValues = {
  clientType: clientTypes[0].value,
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
  state: states[0],
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

const Tab = createBottomTabNavigator();

const ClientForm: React.FC = () => {
  const navigation = useNavigation();

  const { user } = useSelector((state: RootState) => state.auth);

  const handleSubmit = (values: ClientValues) => {
    const body: ClientAPICreation = {
      TipoDeCliente: values.clientType as ClientType,
      RazaoSocial: values.name,
      NomeFantasia: values.fantasyName,
      CnpjCpf: values.cnpjCPF,
      IeRG: values.ieRG,
      ListaDePreco: values.priceList,
      Regiao: values.region,
      Endereco: values.address,
      Bairro: values.district,
      Complemento: values.address2,
      CEP: values.zipcode,
      Cidade: values.city,
      Estado: values.state,
      Telefone: values.phone,
      OutroTelefone: values.phone2,
      Celular: values.cellphone,
      Email: values.email,
      Email2: values.email2,
      Representante: user.CodigoDoRepresentante,
    };
  };

  return (
    <Formik
      initialValues={clientInitialValues}
      validationSchema={clientSchema}
      onSubmit={(values) => handleSubmit(values)}
    >
      {({ handleSubmit }) => (
        <Container
          header={{
            title: "Novo Cliente",
            leftComponent: {
              icon: "arrow-back",
              onPress: () => navigation.goBack(),
            },
            rightComponent: {
              icon: "done",
              onPress: () => handleSubmit(),
            },
          }}
        >
          <Tab.Navigator
            tabBarOptions={{
              style: {
                backgroundColor: "#333",
              },
              activeTintColor: "#fff",
              inactiveTintColor: "#666",
            }}
          >
            <Tab.Screen
              name="Informações"
              component={ClientFormInfo}
              options={{
                tabBarIcon: ({ color, size }): ReactNode => (
                  <MaterialIcons name="person" color={color} size={size} />
                ),
              }}
            />
            <Tab.Screen
              name="Contato"
              component={ClientFormContact}
              options={{
                tabBarIcon: ({ color, size }): ReactNode => (
                  <MaterialCommunityIcons
                    name="book-account"
                    color={color}
                    size={size}
                  />
                ),
              }}
            />
            <Tab.Screen
              name="Endereço"
              component={ClientFormAddress}
              options={{
                tabBarIcon: ({ color, size }): ReactNode => (
                  <MaterialIcons name="map" color={color} size={size} />
                ),
              }}
            />
          </Tab.Navigator>
        </Container>
      )}
    </Formik>
  );
};

export default ClientForm;
