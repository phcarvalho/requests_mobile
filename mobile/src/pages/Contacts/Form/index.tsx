import React, { useState } from "react";
import { useNavigation } from "@react-navigation/native";

import Header from "../../../components/Header";
import Container from "../../../components/Container";

import { Button, Input } from "react-native-elements";
import Form from "../../../components/Form";
import { View } from "react-native";

const ContactForm: React.FC = () => {
  const [name, setName] = useState("");
  const [phonePersonal, setPhonePersonal] = useState("");
  const [phoneCommercial, setPhoneCommercial] = useState("");
  const [email, setEmail] = useState("");
  const [city, setCity] = useState("");
  const [state, setState] = useState("");

  const navigation = useNavigation();

  return (
    <Container>
      <Header
        title="Novo Contato"
        rightComponent={{
          icon: "close",
          onPress: () => navigation.goBack(),
        }}
      />
      <Form>
        <Input
          label="Nome"
          placeholder="Nome do contato"
          value={name}
          onChangeText={(value) => setName(value)}
        />
        <Input
          label="Telefone Pessoal"
          placeholder="(xx) xxxxx-xxxx"
          value={phonePersonal}
          onChangeText={(value) => setPhonePersonal(value)}
        />
        <Input
          label="Telefone Comercial"
          placeholder="(xx) xxxxx-xxxx"
          value={phoneCommercial}
          onChangeText={(value) => setPhoneCommercial(value)}
        />
        <Input
          label="E-mail"
          placeholder="nome@email.com.br"
          value={email}
          onChangeText={(value) => setEmail(value)}
        />
        <Input
          label="Cidade"
          placeholder="Nome da Cidade"
          value={city}
          onChangeText={(value) => setCity(value)}
        />
        <Input
          label="Estado"
          placeholder="Nome do Estado"
          value={state}
          onChangeText={(value) => setState(value)}
        />
      </Form>
      <Button title="Criar" onPress={() => console.log(name)} />
    </Container>
  );
};

export default ContactForm;
