import { DrawerContentScrollView, DrawerItem } from '@react-navigation/drawer';
import React from 'react';
import { Text, View } from 'react-native';

export default function CustomDrawerContent(props: any) {
  return (
    <DrawerContentScrollView style={{}} {...props}>
      {/* Custom Header */}
      <View style={{ padding: 16, backgroundColor: '#eee' }}>
        <Text style={{ fontSize: 18, fontWeight: 'bold' }}>Welcome!</Text>
      </View>

      {/* Default Drawer Items */}
      {/* <DrawerItemList {...props} /> */}

      {/* Custom Extra Item */}
      <DrawerItem
        label="Login"
        onPress={() => {
          props.navigation.navigate('(auth)/login');
        }}
      />
    </DrawerContentScrollView>
  );
}
