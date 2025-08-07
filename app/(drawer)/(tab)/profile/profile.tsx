import Button from "@/components/Button";
import { router, useNavigation } from "expo-router";
import React, { useLayoutEffect } from "react";
import { Text, View } from "react-native";

const Profile = () => {
  const navigation = useNavigation();

  useLayoutEffect(() => {
    navigation?.setOptions({ headerTitle: "Profile" });
  }, [navigation]);
  return (
    <View>
      <Text>Profile</Text>
       <Button onPress={() => {
        router.push('/(drawer)/(tab)/profile/123');
      }}>Details</Button>
    </View>
  )
}
export default Profile;
