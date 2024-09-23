import { View, Text , ScrollView,} from 'react-native'
import React from 'react'
import Slider from '../components/Slider';
import Chips from '../components/Chips';


const Schedule = () => {
  return (
    <View className=" h-screen flex-1">
      <ScrollView showsVerticalScrollIndicator={false}>
        <View className="bg-white">
          <Slider />
          <Chips />
        </View>
      </ScrollView>
    </View>
  );
}

export default Schedule