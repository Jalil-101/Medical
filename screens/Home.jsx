import { View, Text, SafeAreaView, Image } from "react-native";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import Ionicons from "@expo/vector-icons/Ionicons";
import EvilIcons from "@expo/vector-icons/EvilIcons";
import React from "react";
import Searchbar from "../components/Searchbar";
import Head from "../components/Head";
import Card from "../components/Card";

const Home = () => {
  return (
    <SafeAreaView className="bg-white ">
      {/* start of profile and name section  */}
      <View>
        <Head />
      </View>
      {/* end of profile and name section */}

      {/* start of info card  section  */}
      <View>
        <Card />
      </View>
      {/* end of info card section */}
      <View><Searchbar/></View>
    </SafeAreaView>
  );
};

export default Home;
