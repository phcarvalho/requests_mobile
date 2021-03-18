import React, { ReactNode, useEffect } from "react";
import { ActivityIndicator } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { useNavigation } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { MaterialIcons, MaterialCommunityIcons } from "@expo/vector-icons";

import { RootState } from "../../../stores/modules/rootReducer";
import { resetCurrentClient } from "../../../stores/modules/client";

import { Container } from "../../../components/Common";

import ClientDetailAddress from "./Address";
import ClientDetailInfo from "./Info";
import ClientDetailContact from "./Contact";

const Tab = createBottomTabNavigator();

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
    return (
      <Container
        header={{
          title: "Detalhes do cliente",
          rightComponent: {
            icon: "close",
            onPress: () => navigation.goBack(),
          },
        }}
        verticalCenter
      >
        <ActivityIndicator size="small" color="#666" />
      </Container>
    );
  }

  return (
    <Container
      header={{
        title: currentClient.RazaoSocial,
        rightComponent: {
          icon: "close",
          onPress: () => navigation.goBack(),
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
          component={ClientDetailInfo}
          options={{
            tabBarIcon: ({ color, size }): ReactNode => (
              <MaterialIcons name="person" color={color} size={size} />
            ),
          }}
        />
        <Tab.Screen
          name="Contato"
          component={ClientDetailContact}
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
          component={ClientDetailAddress}
          options={{
            tabBarIcon: ({ color, size }): ReactNode => (
              <MaterialIcons name="map" color={color} size={size} />
            ),
          }}
        />
      </Tab.Navigator>
    </Container>
  );
};

export default ClientDetail;
