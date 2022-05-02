import React from 'react';
import {Menu, NativeBaseProvider, HamburgerIcon, Box} from 'native-base';
import {View, Pressable} from 'react-native';

const HamburgerMenu = () => {
  return (
    <View >
      <NativeBaseProvider>
      <Box h="100%" w="100%" alignItems="flex-start" justifyContent="center">
        <Menu 
          trigger={triggerProps => {
            return (
              <Pressable 
                accessibilityLabel="More options menu"
                {...triggerProps}>
                <HamburgerIcon
                  style={{ color: 'gray'  }}
                />
              </Pressable>
            );
          }}>
          <Menu.Item>Arial</Menu.Item>
          <Menu.Item>Nunito Sans</Menu.Item>
          <Menu.Item>Roboto</Menu.Item>
          <Menu.Item>Poppins</Menu.Item>
          <Menu.Item>SF Pro</Menu.Item>
          <Menu.Item>Helvetica</Menu.Item>
          <Menu.Item isDisabled>Sofia</Menu.Item>
          <Menu.Item>Cookie</Menu.Item>
        </Menu>
        </Box>
      </NativeBaseProvider>
    </View>
  );
};

export default HamburgerMenu;
