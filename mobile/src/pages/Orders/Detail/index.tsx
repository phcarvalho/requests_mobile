import React, { ReactNode, useEffect } from "react";
import { useNavigation } from "@react-navigation/native";
import { useDispatch, useSelector } from "react-redux";
import { ActivityIndicator } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { MaterialIcons, MaterialCommunityIcons } from "@expo/vector-icons";

import { resetCurrentOrder } from "../../../stores/modules/order";
import { RootState } from "../../../stores/modules/rootReducer";

import { Container } from "../../../components/Common";

import OrderDetailInfo from "./Info";
import OrderDetailProducts from "./Products";

const Tab = createBottomTabNavigator();

const OrderDetail: React.FC = () => {
  const navigation = useNavigation();
  const dispatch = useDispatch();

  const { currentOrder } = useSelector((state: RootState) => state.order);

  useEffect(() => {
    return () => {
      dispatch(resetCurrentOrder());
    };
  }, []);

  if (!currentOrder) {
    navigation.goBack();

    return null;
  }

  return (
    <Container
      header={{
        title: currentOrder.Pedido,
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
          component={OrderDetailInfo}
          options={{
            tabBarIcon: ({ color, size }): ReactNode => (
              <MaterialIcons name="list-alt" color={color} size={size} />
            ),
          }}
        />
        <Tab.Screen
          name="Produtos"
          component={OrderDetailProducts}
          options={{
            tabBarIcon: ({ color, size }): ReactNode => (
              <MaterialCommunityIcons
                name="clipboard-list-outline"
                color={color}
                size={size}
              />
            ),
          }}
        />
      </Tab.Navigator>
    </Container>
  );
};

export default OrderDetail;
