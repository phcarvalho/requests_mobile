import React from "react";
import { useSelector } from "react-redux";
import { Dimensions, FlatList } from "react-native";
import { Avatar, Icon, ListItem } from "react-native-elements";
// import { ProgressChart } from "react-native-chart-kit";

import { RootState } from "../../stores/modules/rootReducer";

import { Container, Content } from "../../components/Common";

// import chartConfig from "../../configs/chart";

// import { Container } from './styles';

const Home: React.FC = () => {
  const { orders } = useSelector((state: RootState) => state.order);

  const ordersFiltered = orders.slice(0, 5);

  return (
    <Container
      header={{
        title: "Início",
      }}
    >
      {/* <Content title="Metas">
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
      </Content> */}
      <Content title="Seus pedidos" fill>
        <FlatList
          keyExtractor={(item, index) => `order-${index}`}
          data={ordersFiltered}
          renderItem={({ item, index }) => (
            <ListItem key={index} bottomDivider>
              <Avatar
                source={require("../../../assets/flat-icons/document.png")}
              />
              <ListItem.Content>
                <ListItem.Title>{item.Cliente}</ListItem.Title>
                <ListItem.Subtitle>
                  {item.Pedido} | {item.FormaDePagamento} -{" "}
                  {item.CondicaoDePagamento}
                </ListItem.Subtitle>
              </ListItem.Content>
            </ListItem>
          )}
        />
      </Content>
    </Container>
  );
};

export default Home;
