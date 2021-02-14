import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import ClientList from "./List";
import ClientForm from "./Form";

const ClientStack = createStackNavigator();

const Clients: React.FC = () => {
  return (
    <ClientStack.Navigator
      headerMode="none"
      initialRouteName="ClientList"
      screenOptions={{
        animationEnabled: false,
      }}
    >
      <ClientStack.Screen name="ClientList" component={ClientList} />
      <ClientStack.Screen name="ClientForm" component={ClientForm} />
    </ClientStack.Navigator>
  );
};

export default Clients;
