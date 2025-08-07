import Button from "@/components/Button";
import { useNavigation } from "expo-router";
import React, { useLayoutEffect } from "react";
import { View } from "react-native";
const Index = () => {
  const navigation = useNavigation();

  useLayoutEffect(() => {
    navigation.getParent()?.setOptions({ headerTitle: "Index" });
  }, [navigation]);
  return (
    <View>
      <Button onPress={() => {
        // router.push('/(auth)/login');
      }}>Login</Button>

    </View>
  )
}
export default Index;
