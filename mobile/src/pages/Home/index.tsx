import React from "react";

import Header from "../../components/Header";
import { Container } from "../../components/Common";

// import { Container } from './styles';

const Home: React.FC = () => {
  return (
    <Container>
      <Header
        title="Início"
        // rightComponent={{
        //   icon: "sync",
        //   onPress: () => console.log("sync"),
        // }}
      />
    </Container>
  );
};

export default Home;
