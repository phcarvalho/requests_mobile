import React, { ReactNode } from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { MaterialIcons, MaterialCommunityIcons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { useDispatch, useSelector } from "react-redux";
import { Formik } from "formik";
import * as yup from "yup";

import { clientTypes, ClientValues } from "./types";

import { createClient } from "../../../services/client";

import {
  addNewClient,
  ClientInterface,
  fetchClients,
} from "../../../stores/modules/client";
import { RootState } from "../../../stores/modules/rootReducer";

import { Container, FormikSnackBar } from "../../../components/Common";

import { states } from "../../../types/address";
import { ClientType } from "../../../types/clients";

import ClientFormInfo from "./Info";
import ClientFormContact from "./Contact";
import ClientFormAddress from "./Address";

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
  openDate: new Date(),
};

const clientSchema = yup.object().shape({
  name: yup
    .string()
    .min(2, "Nome muito pequeno")
    .required("* Campo obrigatório"),
  fantasyName: yup.string(),
  cnpjCPF: yup.string().required("* Campo obrigatório"),
  ieRG: yup.string().required("* Campo obrigatório"),
  phone: yup.string().required("* Campo obrigatório"),
  phone2: yup.string(),
  cellphone: yup.string().required("* Campo obrigatório"),
  email: yup.string().required("* Campo obrigatório"),
  email2: yup.string(),
  city: yup.string().required("* Campo obrigatório"),
  state: yup.string().required("* Campo obrigatório"),
  region: yup.string().required("* Campo obrigatório"),
  district: yup.string().required("* Campo obrigatório"),
  zipcode: yup.string().required("* Campo obrigatório"),
  address: yup.string().required("* Campo obrigatório"),
  address2: yup.string(),
  clientType: yup.string().required("* Campo obrigatório"),
  priceList: yup.string().required("* Campo obrigatório"),
  openDate: yup.date().required("* Campo obrigatório"),
});

const Tab = createBottomTabNavigator();

const ClientForm: React.FC = () => {
  const navigation = useNavigation();
  const dispatch = useDispatch();

  const { user } = useSelector((state: RootState) => state.auth);

  const handleSubmit = async (values: ClientValues) => {
    const client: ClientInterface = {
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
      isNew: true,
      CodigoDoCliente: "Novo Cliente",
      DataDeAbertura: new Date().toLocaleString(),
    };

    try {
      await createClient(client);

      dispatch(fetchClients(user?.CodigoDoRepresentante ?? ""));
    } catch (error) {
      dispatch(addNewClient(client));
    }

    navigation.goBack();
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
          <FormikSnackBar message="O cliente não pode ser criado: Verifique as informações" />
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
