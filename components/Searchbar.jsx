import { View, Text, TextInput }    from 'react-native'
import React, { useState } from 'react'
 





const Searchbar = () => {
    const [text, onChangeText] = useState("Useless Text");
  return (
    <View>
      <TextInput
        className=" border-b-2 py-4 m-4 px-2"
        onChangeText={onChangeText}
        value={text}
      />
    </View>
  );
}

export default Searchbar