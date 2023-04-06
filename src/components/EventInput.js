//p97.change event

//rnfe + tab
import { View, Text, TextInput } from 'react-native';
import React, { useState } from 'react';

const EventInput = () => {
  const [text, setText] = useState('');
  const _onChange = event => {
    //nfn + tab
    const { eventCount, target, text } = event.nativeEvent;
    console.log(eventCount, target, text);
    setText(event.nativeEvent.text);
  };

  return (
    <View>
      <Text style={{ margin: 10, fontSize: 30 }}>text: {text}</Text>
      <TextInput
        style={{ borderWidth: 1, padding: 10, fontSize: 20 }} //텍스트 입력상자
        placeholder="Enter a text..."
        onChange={_onChange}
      />
    </View>
  );
};

export default EventInput;
