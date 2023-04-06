import { Pressable, Text } from 'react-native';
import React from 'react';

const EventButton = () => {
  const _onPressIn = () => console.log('Press In !!!');
  const _onPressOut = () => console.log('Press Out !!!');
  const _OnPress = () => console.log('Press !!!');
  const _onLongPress = () => console.log('Long Press !!!');

  return (
    <Pressable
      style={{
        backgroundColor: '#f1c40f',
        padding: 16,
        margin: 10,
        borderRadius: 8,
      }}
      onPressIn={_onPressIn}
      onLongPress={_onLongPress}
      onPressOut={_onPressOut}
      onPress={_OnPress}
      delayLongPress={3000} //3초: onLongPress 시간 조절
    >
      <Text style={{ color: 'white', fontSize: 24 }}>Press</Text>
    </Pressable>
  );
};

export default EventButton;
