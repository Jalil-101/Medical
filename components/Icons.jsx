import { View, Text } from 'react-native'
import React from 'react'
import FontAwesome6 from "@expo/vector-icons/FontAwesome6";
import Ionicons from "@expo/vector-icons/Ionicons";
import FontAwesome5 from "@expo/vector-icons/FontAwesome5";


const Icons = () => {
    return (
      <View className="flex-row justify-evenly">
        <View>
          <View className="border-2   border-white  bg-white rounded-full h-16 w-16 items-center justify-center">
            <FontAwesome6 name="virus-covid" size={24} color="#4894fe" />
          </View>
          <Text className=" text-lg mt-1 text-[#B2AFAF]">Covid 19</Text>
        </View>
        <View>
          <View className="border-2   border-white  bg-white rounded-full h-16 w-16 items-center justify-center">
            <FontAwesome6 name="user-doctor" size={24} color="#4894fe" />
          </View>
          <Text className=" text-lg mt-1 pl-2 text-[#B2AFAF]">Doctor</Text>
        </View>
        <View>
          <View className="border-2    border-white  bg-white  rounded-full h-16 w-16 items-center justify-center">
            <Ionicons name="bandage" size={24} color="#4894fe" />
          </View>
          <Text className=" text-lg mt-1 text-[#B2AFAF]">Medicine</Text>
        </View>
        <View>
          <View className="border-2   border-white  bg-white  rounded-full h-16 w-16 items-center justify-center">
            <FontAwesome5 name="hospital-alt" size={24} color="#4894fe" />
          </View>
          <Text className=" text-lg mt-1 text-[#B2AFAF] pl-1">Hospital</Text>
        </View>
      </View>
    );
}

export default Icons