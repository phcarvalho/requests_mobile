import React from "react";
import { Provider } from "react-redux";
import { ThemeProvider } from "react-native-elements";
import { SafeAreaProvider } from "react-native-safe-area-context";

import DrawerRoutes from "./src/routes/DrawerRoutes";

import theme from "./src/configs/theme";
import store from "./src/stores";

export default function App() {
  return (
    <SafeAreaProvider>
      <ThemeProvider theme={theme}>
        <Provider store={store}>
          <DrawerRoutes />
        </Provider>
      </ThemeProvider>
    </SafeAreaProvider>
  );
}
