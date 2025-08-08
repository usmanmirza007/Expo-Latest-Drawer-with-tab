import Button from "@/components/Button";
import Header from "@/components/Header";
import { router } from "expo-router";
import React from "react";
import { View } from "react-native";
const Index = () => {

  return (
    <View>
      <Header title="Home" isDrawer={true}/>
      <Button onPress={() => {
        router.push('/(auth)/login');
      }}>Login</Button>

    </View>
  )
}
export default Index;
