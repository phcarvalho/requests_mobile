import { Theme } from "react-native-elements";

const theme: Theme = {
  Header: {
    statusBarProps: {
      barStyle: "light-content",
      backgroundColor: "#333",
    },
    containerStyle: {
      backgroundColor: "#333",
      height: 80,
    },
    leftComponent: {
      color: "#eee",
    },
    centerComponent: {
      style: {
        fontSize: 18,
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

export default theme;
