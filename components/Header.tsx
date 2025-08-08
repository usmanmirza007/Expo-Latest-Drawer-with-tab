import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

export default function Header({ title = "My App", isDrawer = false }) {
  const navigation = useNavigation();
  const insets = useSafeAreaInsets();

  return (
    <View style={{ height: 60, marginTop: insets.top, flexDirection: 'row', alignItems: 'center', paddingHorizontal: 16, backgroundColor: '#fff', elevation: 4 }}>
      {isDrawer && <TouchableOpacity onPress={() => navigation.openDrawer()}>
        <Ionicons name="menu" size={28} />
      </TouchableOpacity>}
      <Text style={{ marginLeft: 16, fontSize: 18, fontWeight: 'bold' }}>{title}</Text>
    </View>
  );
}
