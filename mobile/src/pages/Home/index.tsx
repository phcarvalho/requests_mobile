import React from "react";
import { useSelector } from "react-redux";
import { Dimensions, FlatList } from "react-native";
import { Avatar, ListItem } from "react-native-elements";
import { ProgressChart } from "react-native-chart-kit";

import { RootState } from "../../stores/modules/rootReducer";

import { Container, Content } from "../../components/Common";

import chartConfig from "../../configs/chart";

// import { Container } from './styles';

const tasks = [
  {
    id: 1,
    title: "Ligar para o João",
    info: "(41) 99999-9999",
  },
  {
    id: 2,
    title: "Enviar email para o Carlos",
    info: "carlos@teste.com.br",
  },
  {
    id: 3,
    title: "Ligar para o João",
    info: "(41) 99999-9999",
  },
  {
    id: 4,
    title: "Enviar email para o Carlos",
    info: "carlos@teste.com.br",
  },
  {
    id: 5,
    title: "Ligar para o João",
    info: "(41) 99999-9999",
  },
  {
    id: 6,
    title: "Enviar email para o Carlos",
    info: "carlos@teste.com.br",
  },
  {
    id: 7,
    title: "Ligar para o João",
    info: "(41) 99999-9999",
  },
  {
    id: 8,
    title: "Enviar email para o Carlos",
    info: "carlos@teste.com.br",
  },
];

const Home: React.FC = () => {
  const { userName } = useSelector((state: RootState) => state.auth);

  return (
    <Container
      header={{
        title: "Início",
      }}
    >
      <Content title="Metas">
        <ProgressChart
          data={{
            labels: ["Venda", "Cliente"],
            data: [0, 0.8],
          }}
          width={Dimensions.get("screen").width * 0.8}
          strokeWidth={16}
          radius={32}
          height={200}
          chartConfig={chartConfig}
          hideLegend={false}
        />
      </Content>
      <Content title="Atividades" fill>
        <FlatList
          keyExtractor={(item) => `${item.id}`}
          data={tasks}
          // onRefresh={() => dispatch(fetchClients())}
          // refreshing={loading}
          renderItem={({ item, index }) => (
            <ListItem
              key={index}
              bottomDivider
              // onPress={() => handleClick(item)}
            >
              <Avatar
                source={require("../../../assets/flat-icons/document.png")}
              />
              <ListItem.Content>
                <ListItem.Title>{item.title}</ListItem.Title>
                <ListItem.Subtitle>{item.info}</ListItem.Subtitle>
              </ListItem.Content>
            </ListItem>
          )}
        />
      </Content>
    </Container>
  );
};

export default Home;
