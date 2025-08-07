import { useNavigation } from "expo-router";
import React, { useLayoutEffect } from "react";
import { Text, View } from "react-native";

const Profile = () => {
  const navigation = useNavigation();

  useLayoutEffect(() => {
    navigation.getParent()?.setOptions({ headerTitle: "Profile" });
  }, [navigation]);
  return (
    <View>
      <Text>Profile</Text>
      
    </View>
  )
}
export default Profile;
