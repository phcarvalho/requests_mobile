import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { NavigationContainer } from "@react-navigation/native";
import { MaterialIcons } from "@expo/vector-icons";

import CustomDrawerContent from "./CustomDrawerContent";

import Home from "../../pages/Home";
import Products from "../../pages/Products";
import Clients from "../../pages/Client";
import Orders from "../../pages/Orders";
import Tasks from "../../pages/Tasks";

const Drawer = createDrawerNavigator();

interface RouteAttributes {
  name: string;
  title: string;
  materialIconName: string;
  component: React.FC;
}

const routeOptions: RouteAttributes[] = [
  {
    name: "Home",
    title: "Início",
    materialIconName: "home",
    component: Home,
  },
  // {
  //   name: "Tasks",
  //   title: "Atividades",
  //   materialIconName: "list-alt",
  //   component: Tasks,
  // },
  {
    name: "Clients",
    title: "Clientes",
    materialIconName: "person",
    component: Clients,
  },
  // {
  //   name: "Orders",
  //   title: "Pedidos",
  //   materialIconName: "receipt",
  //   component: Orders,
  // },
  {
    name: "Products",
    title: "Produtos",
    materialIconName: "inventory",
    component: Products,
  },
];

const DrawerRoutes = () => {
  return (
    <NavigationContainer>
      <Drawer.Navigator
        drawerContent={CustomDrawerContent}
        screenOptions={{
          unmountOnBlur: true,
        }}
      >
        {routeOptions.map((route) => (
          <Drawer.Screen
            key={route.name}
            name={route.name}
            component={route.component}
            options={{
              drawerLabel: route.title,
              drawerIcon: ({}) => (
                <MaterialIcons
                  name={route.materialIconName as any}
                  size={25}
                  color="#999"
                />
              ),
            }}
          />
        ))}
      </Drawer.Navigator>
    </NavigationContainer>
  );
};

export default DrawerRoutes;
