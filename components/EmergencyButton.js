import React, { useState } from 'react';
import styles from './Styling';
import { View, Image, Pressable, StatusBar } from 'react-native';

const EmergencyButton = () => {
    const [isPressed, setIsPressed] = useState(false);

    const handlePress = () => {
        setIsPressed(!isPressed);
    }
  return (
    <View style={{flex:1, alignItems:'flex-start', justifyContent:'center'}}>
      {isPressed && <StatusBar backgroundColor='#FE405C'></StatusBar>}
        <Pressable onPress={handlePress}>
      <Image source={require('../assets/Emergency.png')} style={[styles.emergencyButton, isPressed && styles.emergencyActive]} />
      </Pressable>
    </View>
  );
};

export default EmergencyButton;
