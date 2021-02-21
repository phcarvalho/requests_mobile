import React from "react";
import { FlatList } from "react-native";
import { Avatar, ListItem } from "react-native-elements";
import { DateTime } from "luxon";

import { Container } from "../../../components/Common";
import { useNavigation } from "@react-navigation/native";

const tasks = [
  {
    id: 1,
    date: new Date(),
    client: "John Snow",
    clientType: "Aves",
    type: "Tecnica",
    description: "Visitar cliente",
  },
  {
    id: 2,
    date: new Date(),
    client: "John Snow",
    clientType: "Aves",
    type: "Tecnica",
    description: "Visitar cliente",
  },
  {
    id: 3,
    date: new Date(),
    client: "John Snow",
    clientType: "Aves",
    type: "Tecnica",
    description: "Visitar cliente",
  },
  {
    id: 4,
    date: new Date(),
    client: "John Snow",
    clientType: "Aves",
    type: "Tecnica",
    description: "Visitar cliente",
  },
  {
    id: 5,
    date: new Date(),
    client: "John Snow",
    clientType: "Aves",
    type: "Tecnica",
    description: "Visitar cliente",
  },
  {
    id: 6,
    date: new Date(),
    client: "John Snow",
    clientType: "Aves",
    type: "Tecnica",
    description: "Visitar cliente",
  },
  {
    id: 7,
    date: new Date(),
    client: "John Snow",
    clientType: "Aves",
    type: "Tecnica",
    description: "Visitar cliente",
  },
  {
    id: 8,
    date: new Date(),
    client: "John Snow",
    clientType: "Aves",
    type: "Tecnica",
    description: "Visitar cliente",
  },
];

const TaskList: React.FC = () => {
  const navigation = useNavigation();

  return (
    <Container
      header={{
        title: "Atividades",
        rightComponent: {
          icon: "add",
          onPress: () => navigation.navigate("TaskForm"),
        },
      }}
    >
      <FlatList
        keyExtractor={(item, index) => `${item.id}`}
        data={tasks}
        renderItem={({ item, index }) => (
          <ListItem
            key={index}
            bottomDivider
            onPress={() => console.log(item.id)}
          >
            <Avatar
              source={require("../../../../assets/flat-icons/document.png")}
            />
            <ListItem.Content>
              <ListItem.Title numberOfLines={1}>{item.client}</ListItem.Title>
              <ListItem.Subtitle>{item.description}</ListItem.Subtitle>
              <ListItem.Subtitle>
                {DateTime.fromJSDate(item.date)
                  .setLocale("pt-br")
                  .toFormat("dd/LL/yyyy 'às' HH'h'mm'min'")}
              </ListItem.Subtitle>
            </ListItem.Content>
            <ListItem.Chevron />
          </ListItem>
        )}
      />
    </Container>
  );
};

export default TaskList;
