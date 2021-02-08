import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import ContactList from "./List";
import ContactForm from "./Form";

const ContactStack = createStackNavigator();

const Contacts: React.FC = () => {
  return (
    <ContactStack.Navigator
      headerMode="none"
      initialRouteName="ContactList"
      screenOptions={{
        animationEnabled: false,
      }}
    >
      <ContactStack.Screen name="ContactList" component={ContactList} />
      <ContactStack.Screen name="ContactForm" component={ContactForm} />
    </ContactStack.Navigator>
  );
};

export default Contacts;
