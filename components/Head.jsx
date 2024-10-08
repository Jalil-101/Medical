import { View, Text ,Image ,SafeAreaView} from 'react-native'
import React from 'react'

const Head = () => {
  return (
    <View className="">
      {/* start of profile and name section  */}
      <View className="pt-2 flex-row justify-between">
        <View className="p-4">
          <Text className="text-lg text-[#83a7d3]">Hello,</Text>
          <Text className="text-xl font-bold text-[#494444]">Hi James</Text>
        </View>
        <View className="p-4">
          <Image
            className="rounded-full"
            source={{
              uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSITSGfJIJxPzTve5FMMZ5wMl-D9hbIPzLwvw&s",
            }}
            height={60}
            width={60}
          />
        </View>
      </View>

      {/* end of profile and name section  */}
    </View>
  );
}

export default Head