import { Button } from "@react-navigation/elements";
import { router, useNavigation } from "expo-router";
import React, { useLayoutEffect } from "react";
import { Text, View } from "react-native";

const ProfileDetail = () => {
  const navigation = useNavigation();

  useLayoutEffect(() => {
    navigation.getParent()?.setOptions({ headerTitle: "ProfileDetail" });
  }, [navigation]);
  return (
    <View>
      {/* <Header title="ProfileDetail" /> */}
      <Text>ProfileDetail</Text>
       <Button onPress={() => {
        router.push('/(auth)/login');
      }}>login</Button>
    </View>
  )
}
export default ProfileDetail;
