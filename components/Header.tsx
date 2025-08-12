import { Ionicons } from '@expo/vector-icons';
import { DrawerActions, useNavigation } from '@react-navigation/native';
import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';

export default function Header({ title = "My App", isDrawer = false }) {
  const navigation = useNavigation(); 

  return (
    <View style={{ height: 60, flexDirection: 'row', alignItems: 'center', paddingHorizontal: 16, backgroundColor: '#fff', elevation: 4 }}>
      {isDrawer && <TouchableOpacity onPress={() => {
        navigation.dispatch(DrawerActions.openDrawer())
        // navigation.openDrawer() --- IGNORE ---
      }}>
        <Ionicons name="menu" size={28} />
      </TouchableOpacity>}
      <Text style={{ marginLeft: 16, fontSize: 18, fontWeight: 'bold' }}>{title}</Text>
    </View>
  );
}
