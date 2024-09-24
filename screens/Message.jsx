import { View, Text,Image } from 'react-native'
import React from 'react'

const Message = () => {
  return (
    <View className="flex-1 justify-center items-center bg-white ">
      <View className="border border-black rounded-3xl items-center">
        <Image
          className="rounded-3xl"
          source={{
            uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT4ZG-cz4gVNjuj0BAMNI-kZyNyxaLfUN7GYw&s",
          }}
          height={250}
          width={350}
        />
        <Text className="text-2xl font-sans font-semibold"> Messages </Text>
      </View>
    </View>
  );
}

export default Message