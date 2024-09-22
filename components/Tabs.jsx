import * as React from "react";
import { Text, View ,StyleSheet} from "react-native";
import { Foundation } from "@expo/vector-icons";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Home from "../screens/Home";
import Schedule from "../screens/Schedule";
import Profile from "../screens/Profile";
import Message from "../screens/Message";

const Tab = createBottomTabNavigator();

export default function Tabs() {
  return (
    <NavigationContainer independent={true}>
      <Tab.Navigator
        screenOptions={{
          headerShown: false,
          tabBarActiveTintColor: "#343423",
          tabBarLabelPosition: "beside-icon",
          tabBarActiveBackgroundColor: "#",
          tabBarStyle: { position: "blue" },
        }}
      >
        <Tab.Screen
          name="home"
          component={Home}
          options={{
            headershown: false,
            tabBarActiveTintColor: "#343423",
            tabBarLabelPosition: "beside-icon",
            tabBarActiveBackgroundColor: "#343423",
            tabBarStyle: { ...styles.tabContainer },

            tabBarIcon: ({ color, size, focused }) => (
              <Foundation name="home" size={24} color="gray" />
            ),
          }}
        />
        <Tab.Screen
          name="schedule"
          component={Schedule}
          options={{
            headershown: false,
            tabBarActiveTintColor: "#343423",
            tabBarLabelPosition: "beside-icon",
            tabBarActiveBackgroundColor: "#343423",
          
            

            tabBarLabel: "Schedule",
              tabBarItemStyle:{}

            tabBarIcon: ({ color, size }) => (
              <Foundation name="home" size={24} color="gray" />
            ),
          }}
        />

        <Tab.Screen
          name="message"
          component={Message}
          options={{
            headershown: false,
            tabBarActiveTintColor: "#343423",
            tabBarLabelPosition: "beside-icon",
            tabBarActiveBackgroundColor: "#343423",

            tabBarLabel: "Message",

            tabBarIcon: ({ color, size }) => (
              <Foundation name="home" size={24} color="gray" />
            ),
          }}
        />

        <Tab.Screen
          name="profile"
          component={Profile}
          options={{
            headershown: false,
            tabBarActiveTintColor: "#343423",
            tabBarLabelPosition: "beside-icon",
            tabBarActiveBackgroundColor: "#343423",

            tabBarLabel: "Profile",

            tabBarIcon: ({ color, size }) => (
              <Foundation name="home" size={24} color="gray" />
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
    elevation: 0,
    flexDirection: "row",
    justifyContent: "space-around",
    paddingHorizontal: 20,
    alignItems: "center",
  },
});