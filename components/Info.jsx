import { View, Text,Image } from 'react-native'
import React from 'react'
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import Ionicons from "@expo/vector-icons/Ionicons";
import EvilIcons from "@expo/vector-icons/EvilIcons";
import Feather from "@expo/vector-icons/Feather";

const Info = () => {
  return (
    <View>
      {/* Upper section of info card */}
      <View className="p-4">
        <View><Text className="text-lg font-semibold text-black pb-1">Near Doctor</Text></View>
        <View className="border border-white h-40 w-fit rounded-2xl  bg-white">
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
                  <Text className="text-lg font-semibold text-black pb-1">
                    Dr. Joseph Brostito
                  </Text>
                  <Text className="text-base text-[#B2AFAF]">
                    {" "}
                    Dental Specialist
                  </Text>
                </View>
              </View>
              <View className="pt-5 pl-10">
                <View className="flex-row space-x-1">
                  <Feather name="map-pin" size={22} color="black" />
                  <Text className="text-base text-[#B2AFAF]">1.2 KM</Text>
                </View>
              </View>
            </View>
            {/* Upper section of info card */}
          </View>
          {/* beneath faint border line */}
          <View className="border-b-0.5 w-11/12 ml-4 border-white pt-3"></View>
          <View className="pt-4">
            <View className="flex-row justify-around">
              <View className="flex-row items-center space-x-1">
                <EvilIcons name="clock" size={24} color="#FEBA68" />
                <Text className="text-[#FEBA68]"> 4.8 (120 reviews)</Text>
              </View>

              <View className="flex-row items-center space-x-1">
                <EvilIcons name="clock" size={24} color="#4894fe" />
                <Text className="text-[#4894fe]"> Open at 17.00</Text>
              </View>
            </View>
          </View>
        </View>
      </View>
         <View className="p-4">
        <View><Text className="text-lg font-semibold text-black pb-1">Near Doctor</Text></View>
        <View className="border border-white h-40 w-fit rounded-2xl  bg-white">
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
                  <Text className="text-lg font-semibold text-black pb-1">
                    Dr. Joseph Brostito
                  </Text>
                  <Text className="text-base text-[#B2AFAF]">
                    {" "}
                    Dental Specialist
                  </Text>
                </View>
              </View>
              <View className="pt-5 pl-10">
                <View className="flex-row space-x-1">
                  <Feather name="map-pin" size={22} color="black" />
                  <Text className="text-base text-[#B2AFAF]">1.2 KM</Text>
                </View>
              </View>
            </View>
            {/* Upper section of info card */}
          </View>
          {/* beneath faint border line */}
          <View className="border-b-0.5 w-11/12 ml-4 border-white pt-3"></View>
          <View className="pt-4">
            <View className="flex-row justify-around">
              <View className="flex-row items-center space-x-1">
                <EvilIcons name="clock" size={24} color="#FEBA68" />
                <Text className="text-[#FEBA68]"> 4.8 (120 reviews)</Text>
              </View>

              <View className="flex-row items-center space-x-1">
                <EvilIcons name="clock" size={24} color="#4894fe" />
                <Text className="text-[#4894fe]"> Open at 17.00</Text>
              </View>
            </View>
          </View>
        </View>
      </View>
    </View>

  );
}

export default Info