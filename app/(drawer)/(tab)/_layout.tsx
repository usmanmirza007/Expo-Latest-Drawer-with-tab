import { FontAwesome, Ionicons } from "@expo/vector-icons";
import { Tabs } from "expo-router";
import React from "react";

const Tabroot = () => {

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
