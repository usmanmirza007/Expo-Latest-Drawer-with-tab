import { useNavigation } from "expo-router";
import React, { useLayoutEffect } from "react";
import { Text, View } from "react-native";

const ProfileDetail = () => {
  const navigation = useNavigation();

  useLayoutEffect(() => {
    navigation.getParent()?.setOptions({ headerTitle: "ProfileDetail" });
  }, [navigation]);
  return (
    <View>
      <Text>ProfileDetail</Text>
      
    </View>
  )
}
export default ProfileDetail;
