import { View, Text, Image, ScrollView } from "react-native";
import React from "react";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import Ionicons from "@expo/vector-icons/Ionicons";
import EvilIcons from "@expo/vector-icons/EvilIcons";

const Chips = () => {
  return (
    <View className="flex-1">
      <ScrollView showsVerticalScrollIndicator={false}>
        <View className="gap-8  p-2">
          {/* first chip of 3 */}
          <View className="p-4 border border-gray-100 rounded-lg  w-11/12">
            <View className="">
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
                        Dr. Imran Syahir
                      </Text>
                      <Text className="text-base text-gray-400">
                        {" "}+
                        Dental Specialist
                      </Text>
                    </View>
                  </View>
                </View>
              </View>

              <View className="border-b-0.5 w-11/12 ml-4 border-white pt-2"></View>
              <View className="">
                <View className="flex-row justify-around">
                  <View className="flex-row items-center space-x-1">
                    <Ionicons name="calendar-outline" size={20} color="gray" />
                    <Text className="text-gray-400"> Sunday, 12 June</Text>
                  </View>

                  <View className="flex-row items-center space-x-1">
                    <EvilIcons name="clock" size={24} color="gray" />
                    <Text className="text-gray-400"> 11:00 - 12:00 AM</Text>
                  </View>
                </View>
              </View>
              <View className=" items-center pt-2">
                <View className="border-2 border-[#CBEAFF] h-12 rounded-3xl w-11/12 bg-[#CBEAFF] justify-center items-center">
                  <Text className="text-[#4894fe] text-lg font-semibold">
                    Detail
                  </Text>
                </View>
              </View>
            </View>
          </View>
          {/* first chip of 3 */}
          {/* first chip of 3 */}
          <View className="p-4 border border-gray-100 rounded-lg  w-11/12">
            <View className="">
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
                        Dr. Imran Syahir
                      </Text>
                      <Text className="text-base text-gray-400">
                        {" "}
                        Dental Specialist
                      </Text>
                    </View>
                  </View>
                </View>
              </View>

              <View className="border-b-0.5 w-11/12 ml-4 border-white pt-2"></View>
              <View className="">
                <View className="flex-row justify-around">
                  <View className="flex-row items-center space-x-1">
                    <Ionicons name="calendar-outline" size={20} color="gray" />
                    <Text className="text-gray-400"> Sunday, 12 June</Text>
                  </View>

                  <View className="flex-row items-center space-x-1">
                    <EvilIcons name="clock" size={24} color="gray" />
                    <Text className="text-gray-400"> 11:00 - 12:00 AM</Text>
                  </View>
                </View>
              </View>
              <View className=" items-center pt-2">
                <View className="border-2 border-[#CBEAFF] h-12 rounded-3xl w-11/12 bg-[#CBEAFF] justify-center items-center">
                  <Text className="text-[#4894fe] text-lg font-semibold">
                    Detail
                  </Text>
                </View>
              </View>
            </View>
          </View>
          {/* first chip of 3 */}
          {/* first chip of 3 */}
          <View className="p-4 border border-gray-100 rounded-lg  w-11/12">
            <View className="">
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
                        Dr. Imran Syahir
                      </Text>
                      <Text className="text-base text-gray-400">
                        {" "}
                        Dental Specialist
                      </Text>
                    </View>
                  </View>
                </View>
              </View>

              <View className="border-b-0.5 w-11/12 ml-4 border-white pt-2"></View>
              <View className="">
                <View className="flex-row justify-around">
                  <View className="flex-row items-center space-x-1">
                    <Ionicons name="calendar-outline" size={20} color="gray" />
                    <Text className="text-gray-400"> Sunday, 12 June</Text>
                  </View>

                  <View className="flex-row items-center space-x-1">
                    <EvilIcons name="clock" size={24} color="gray" />
                    <Text className="text-gray-400"> 11:00 - 12:00 AM</Text>
                  </View>
                </View>
              </View>
              <View className=" items-center pt-2">
                <View className="border-2 border-[#CBEAFF] h-12 rounded-3xl w-11/12 bg-[#CBEAFF] justify-center items-center">
                  <Text className="text-[#4894fe] text-lg font-semibold">
                    Detail
                  </Text>
                </View>
              </View>
            </View>
          </View>
          {/* first chip of 3 */}
        </View>
      </ScrollView>
    </View>
  );
};

export default Chips;
