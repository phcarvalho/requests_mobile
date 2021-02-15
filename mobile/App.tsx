import React from "react";
import { Provider } from "react-redux";
import { ThemeProvider } from "react-native-elements";
import { SafeAreaProvider } from "react-native-safe-area-context";

import theme from "./src/configs/theme";
import store from "./src/stores";

import Main from "./src/main";

export default function App() {
  return (
    <SafeAreaProvider>
      <ThemeProvider theme={theme}>
        <Provider store={store}>
          <Main />
        </Provider>
      </ThemeProvider>
    </SafeAreaProvider>
  );
}
