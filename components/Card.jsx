import { View, Text,Image } from 'react-native'
import React from 'react'
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import Ionicons from "@expo/vector-icons/Ionicons";
import EvilIcons from "@expo/vector-icons/EvilIcons";

const Card = () => {
  return (
      <View>
              {/* Upper section of info card */}
      <View className="p-4">
        <View className="border border-[#4894fe] h-40 w-fit rounded-2xl  bg-[#4894fe]">
          <View>
        
            <View className="flex-row pt-2">
              <View className="flex-row p-2">
                <Image
                  className="rounded-full"
                  source={{
                    uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSQfiKQkZywGZq230A6Yc987kUA4gIdnmWldA&s",
                  }}
                  height={60}
                  width={60}
                />
                <View className="pl-2">
                  <Text className="text-lg font-semibold text-white pb-1">
                    Dr. Imran Syahir
                  </Text>
                  <Text className="text-base text-gray-300">
                    {" "}
                    General Doctor
                  </Text>
                </View>
              </View>
              <View className="pt-5 pl-20">
                <MaterialIcons
                  name="arrow-forward-ios"
                  size={28}
                  color="white"
                />
              </View>
            </View>
            {/* Upper section of info card */}
          </View>
          {/* beneath faint border line */}
          <View className="border-b-0.5 w-11/12 ml-4 border-gray-300 pt-3"></View>
          <View className="pt-4">
            <View className="flex-row justify-around">
              <View className="flex-row items-center space-x-1">
                <Ionicons name="calendar-outline" size={20} color="white" />
                <Text className="text-white"> Sunday, 12 June</Text>
              </View>

              <View className="flex-row items-center space-x-1">
                <EvilIcons name="clock" size={24} color="white" />
                <Text className="text-white"> 11:00 - 12:00 AM</Text>
              </View>
            </View>
          </View>
         
        </View>
      </View>
      </View>
       /* End of info chip */
  );
}

export default Card