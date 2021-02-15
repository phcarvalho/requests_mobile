import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigation } from "@react-navigation/native";
import { Text } from "react-native-elements";

import { RootState } from "../../../stores/modules/rootReducer";
import { resetCurrentClient } from "../../../stores/modules/client";

import Header from "../../../components/Header";
import { Container } from "../../../components/Common";
import { ActivityIndicator } from "react-native";

// import { Container } from './styles';

const ClientDetail: React.FC = () => {
  const navigation = useNavigation();
  const dispatch = useDispatch();

  const { currentClient } = useSelector((state: RootState) => state.client);

  useEffect(() => {
    return () => {
      dispatch(resetCurrentClient());
    };
  }, []);

  if (!currentClient) {
    return null;
  }

  return (
    <Container>
      {!currentClient ? (
        <>
          <Header
            title={"Detalhes do Cliente"}
            rightComponent={{
              icon: "close",
              onPress: () => navigation.goBack(),
            }}
          />

          <ActivityIndicator size="small" color="#666" />
        </>
      ) : (
        <>
          <Header
            title={currentClient.CodigoDoCliente}
            rightComponent={{
              icon: "close",
              onPress: () => navigation.goBack(),
            }}
          />
        </>
      )}

      <Text>{currentClient.RazaoSocial}</Text>
    </Container>
  );
};

export default ClientDetail;
