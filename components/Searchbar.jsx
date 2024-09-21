import {
  View,
  Text,
  TextInput,
  TouchableWithoutFeedback,
  Keyboard,
} from "react-native";
import EvilIcons from "@expo/vector-icons/EvilIcons";
import Feather from "@expo/vector-icons/Feather";
import React, { useState } from "react";

const Searchbar = () => {
  return (
    <View className="pb-4">
      <View>
        <TextInput
          className=" border-2 py-2 m-4 px-12  border-white  bg-white rounded-lg text-lg"
          value={Text}
          placeholder=" Search doctor or health issue"
        />
        <View className="absolute left-6 top-6">
          <Feather name="search" size={26} color="#DCD9D9" />
        </View>
      </View>
    </View>
  );
};

export default Searchbar;
