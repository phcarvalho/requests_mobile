import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import TaskList from "./List";
import TaskForm from "./Form";

const TaskStack = createStackNavigator();

const Tasks: React.FC = () => {
  return (
    <TaskStack.Navigator
      headerMode="none"
      initialRouteName="TaskList"
      screenOptions={{
        animationEnabled: false,
      }}
    >
      <TaskStack.Screen name="TaskList" component={TaskList} />
      <TaskStack.Screen name="TaskForm" component={TaskForm} />
    </TaskStack.Navigator>
  );
};

export default Tasks;
