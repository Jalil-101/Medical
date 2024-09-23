import { View, Text, ScrollView } from 'react-native'
import React from 'react'

const Slider = () => {
    return (
        <View>
            <ScrollView showsHorizontalScrollIndicator={false} horizontal>
                <View className="pt-2">
                    <View className="p-4 gap-4 flex-row">
                        <View className="border-2 border-[#CBEAFF] h-12 rounded-3xl w-48 bg-[#CBEAFF] justify-center items-center">
                            <Text className="text-[#4894fe] text-lg font-semibold">
                                Ongoing Schedule
                            </Text>
                        </View>
                        <View className="border-2 border-[#CBEAFF] h-12 rounded-3xl w-48 bg-[#CBEAFF] justify-center items-center">
                            <Text className="text-[#4894fe] text-lg font-semibold">
                                Upcoming Schedule
                            </Text>
                        </View>
                        <View className="border-2 border-[#CBEAFF] h-12 rounded-3xl w-48 bg-[#CBEAFF] justify-center items-center">
                            <Text className="text-[#4894fe] text-lg font-semibold">
                                Completed Schedule
                            </Text>
                        </View>
                    </View>
                </View>
            </ScrollView>
        </View>
    )
};

export default Slider