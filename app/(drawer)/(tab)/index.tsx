import Button from "@/components/Button";
import Header from "@/components/Header";
import { router } from "expo-router";
import React from "react";
import { Text, View } from "react-native";
const Index = () => {

  return (
    <View>
      <Header title="Home" isDrawer={true} />
      <Button onPress={() => {
        router.push('/(auth)/login');
      }}>Login</Button>
      {/* <View className="flex-1 bg-red-200 items-center justify-center"> */}
        <Text className="text-xl font-bold text-red-700">
          🚀 NativeWind working
        </Text>
      {/* </View> */}
    </View>
  )
}
export default Index;
