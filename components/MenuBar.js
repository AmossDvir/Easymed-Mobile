import React from 'react';
import {View, Image, Pressable, HamburgerIcon} from 'react-native';
import {Menu, NativeBaseProvider} from 'native-base';
import EmergencyButton from './EmergencyButton';
import styles from './Styling';
import HamburgerMenu from './HamburgerMenu';

const MenuBar = () => {
  return (
    <View style={[styles.menuBar]}>
      <View style={{flex:1,paddingLeft: 20, paddingRight: 20, flexDirection:'row'}}>
      <View
        style={{
          alignItems: 'flex-start',
          justifyContent: 'center',
          flex:2
        }}>
        <HamburgerMenu></HamburgerMenu>
      </View>
      <View
        style={{
          alignItems: 'center',
          justifyContent: 'center',
          flex: 3,
        }}>
        <Image source={require('../assets/Logo.png')} style={styles.topLogo} />
      </View>

      <View
        style={{
          alignItems: 'flex-end',
          justifyContent: 'center',
          flex: 3,
        }}>
        <EmergencyButton></EmergencyButton>
      </View>
      </View>
    </View>
  );
};

export default MenuBar;
