import * as React from "react";
import { Text, View } from "react-native";
import { Foundation } from "@expo/vector-icons";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Home from "../screens/Home";

const Tab = createBottomTabNavigator();

export default function Tabs() {
  return (
    <NavigationContainer independent={true}>
      <Tab.Navigator
        screenOptions={{
          headerShown: false,
        }}
      >
        <Tab.Screen
          name="home"
          component={Home}
          options={{
            headershown: false,
            tabBarIcon: ({ color, size }) => (
              <Foundation name="home" size={24} color="red" />
            ),
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
