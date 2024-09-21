import {
  View,
  Text,
  SafeAreaView,
  Image,
  TouchableWithoutFeedback,
  Keyboard,
  ScrollView,
} from "react-native";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import Ionicons from "@expo/vector-icons/Ionicons";
import EvilIcons from "@expo/vector-icons/EvilIcons";
import React from "react";
import Searchbar from "../components/Searchbar";
import Head from "../components/Head";
import Card from "../components/Card";
import Icons from "../components/Icons";
import Info from "../components/Info";

const Home = () => {
  return (
    <TouchableWithoutFeedback
      onPress={() => {
        Keyboard.dismiss();
      }}
    >
      <SafeAreaView className="bg-white ">
        <ScrollView showsVerticalScrollIndicator={false} >
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
          {/* Start of SearchBar */}
          <View>
            <Searchbar />
          </View>
          {/* End of SearchBar */}

          {/* start of Icons */}
          <View>
            <Icons />
          </View>
          {/* end of icons  */}

          {/* Start of info */}
          <View>
            <Info />
          </View>
          {/* end of info  */}
        </ScrollView>
      </SafeAreaView>
    </TouchableWithoutFeedback>
  );
};

export default Home;
