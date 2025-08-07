import { FontAwesome, Ionicons } from "@expo/vector-icons";
import { useNavigationState } from "@react-navigation/native";
import { Tabs, useNavigation } from "expo-router";
import React, { useEffect } from "react";

const Tabroot = () => {
  const navigation = useNavigation();

  const tabIndex = useNavigationState(state => {
    const tabRoute = state.routes.find(r => r.name === '(tab)');
    return tabRoute?.state?.index ?? 0;
  });

  const currentTab = useNavigationState(state => {
    const tabRoute = state.routes.find(r => r.name === '(tab)');
    return tabRoute?.state?.routes?.[tabIndex]?.name ?? 'index';
  });

  useEffect(() => {
    let title = 'Home';
    if (currentTab === 'settings') title = 'Settings';
    else if (currentTab === 'profile') title = 'Profile';

    navigation.getParent()?.setOptions({ headerTitle: title });
  }, [currentTab, navigation]);

  return (
    <Tabs initialRouteName="index" screenOptions={{ headerShown: false }} >
      <Tabs.Screen
        name="index"
        options={{
          title: "Home",
          tabBarIcon: ({ color }) => (
            <FontAwesome size={28} name="home" color={color} />
          ),
        }} />

      <Tabs.Screen name="profile" options={{
        title: "Profile",
        tabBarIcon: ({ color }) => (
          <FontAwesome size={28} name="user-circle-o" color={color} />
        )
      }} />
      <Tabs.Screen name="settings" options={{
        title: "Settings",
        tabBarIcon: ({ color }) => (
          <Ionicons size={28} name="settings" color={color} />
        ),
      }} />
    </Tabs>
  )
}
export default Tabroot;
