import React from "react";
import { ThemeProvider, Theme } from "react-native-elements";
import { SafeAreaProvider } from "react-native-safe-area-context";

import DrawerRoutes from "./src/routes/DrawerRoutes";

const theme: Theme = {
  Header: {
    statusBarProps: {
      barStyle: "light-content",
      backgroundColor: "#333",
    },
    containerStyle: {
      backgroundColor: "#333",
      height: 70,
    },
    leftComponent: {
      color: "#eee",
    },
    centerComponent: {
      style: {
        fontSize: 16,
        color: "#eee",
      },
    },
    rightComponent: {
      color: "#eee",
    },
  },
  Button: {
    buttonStyle: {
      backgroundColor: "#333",
      margin: 10,
    },
  },
};

export default function App() {
  return (
    <SafeAreaProvider>
      <ThemeProvider theme={theme}>
        <DrawerRoutes />
      </ThemeProvider>
    </SafeAreaProvider>
  );
}
