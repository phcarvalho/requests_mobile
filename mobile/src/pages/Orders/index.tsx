import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import OrderList from "./List";
import OrderForm from "./Form";
import OrderDetail from "./Detail";

const OrderStack = createStackNavigator();

const Orders: React.FC = () => {
  return (
    <OrderStack.Navigator
      headerMode="none"
      initialRouteName="OrderList"
      screenOptions={{
        animationEnabled: false,
      }}
      detachInactiveScreens
    >
      <OrderStack.Screen name="OrderList" component={OrderList} />
      <OrderStack.Screen name="OrderForm" component={OrderForm} />
      <OrderStack.Screen name="OrderDetail" component={OrderDetail} />
    </OrderStack.Navigator>
  );
};

export default Orders;
