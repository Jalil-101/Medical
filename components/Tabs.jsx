import * as React from "react";
import { Text, View, StyleSheet } from "react-native";
import { Foundation } from "@expo/vector-icons";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Home from "../screens/Home";
import Schedule from "../screens/Schedule";
import Profile from "../screens/Profile";
import Message from "../screens/Message";
import Ionicons from "@expo/vector-icons/Ionicons";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";

const Tab = createBottomTabNavigator();

export default function Tabs() {
  return (
    <NavigationContainer independent={true}>
      <Tab.Navigator
        screenOptions={{
          headerShown: false,

          tabBarLabelPosition: "beside-icon",
          tabBarActiveBackgroundColor: "#CBEAFF",

          tabBarLabelStyle: {
            display: "none",
          },
        }}
      >
        <Tab.Screen
          name="home"
          component={Home}
          options={{
            headershown: false,
            tabBarItemStyle: {
              borderRadius: 10,
              margin: 10,
            },

            tabBarStyle: {
              alignItems: "center",
              justifyContent: "space-around",
              height: 60,
              paddingHorizontal: 10,
            },
            tabBarLabel: "Home",
            // tabBarLabelStyle: { display: "flex" },

            tabBarIcon: ({ color, size }) => (
              <Foundation name="home" size={24} color="#4894fe" />
            ),
          }}
        />
        <Tab.Screen
          name="schedule"
          component={Schedule}
          options={{
            headershown: false,
            tabBarLabel: "Schedule",
            tabBarItemStyle: {
              alignItems: "center",
              justifyContent: "space-evenly",
              borderRadius: 10,
              margin: 10,
            },

            tabBarStyle: {
              alignItems: "center",
              justifyContent: "space-around",
              height: 60,
            },
            // tabBarLabelStyle: { display: "flex" },

            tabBarIcon: ({ color, size }) => (
              <Ionicons name="calendar-outline" size={20} color="#4894fe" />
            ),
          }}
        />

        <Tab.Screen
          name="message"
          component={Message}
          options={{
            headershown: false,
            tabBarItemStyle: {
              borderRadius: 10,
              margin: 10,
            },
            tabBarStyle: {
              alignItems: "center",
              justifyContent: "space-around",
              height: 60,
            },
            tabBarLabel: "Message",

            tabBarIcon: ({ color, size }) => (
              <MaterialCommunityIcons
                name="message-processing-outline"
                size={24}
                color="gray"
              />
            ),
          }}
        />

        <Tab.Screen
          name="profile"
          component={Profile}
          options={{
            headershown: false,
            tabBarItemStyle: {
              borderRadius: 10,
              margin: 10,
            },
            tabBarStyle: {
              alignItems: "center",
              justifyContent: "space-around",
              height: 60,
            },

            tabBarIcon: ({ color, size }) => (
              <Ionicons name="person-outline" size={24} color="gray" />
            ),
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  tabContainer: {
    position: "absolute",
    bottom: 0,
    width: "100%",
    height: 70,
    backgroundColor: "#afafFB",
    borderRadius: 10,
    elevation: 10,
    flexDirection: "row",
    justifyContent: "space-around",
    paddingHorizontal: 20,
    alignItems: "center",
    borderTopLeftRadius: 24,
    borderTopRightRadius: 24,
    borderLeftWidth: 0.2,
  },
});
