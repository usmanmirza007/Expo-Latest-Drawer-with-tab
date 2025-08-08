import Button from "@/components/Button";
import Header from "@/components/Header";
import { router } from "expo-router";
import React from "react";
import { Text, View } from "react-native";

const Profile = () => {
  
  return (
    <View>
      <Header title="Profile" isDrawer={true} />

      <Text>Profile</Text>
       <Button onPress={() => {
        router.push('/(drawer)/(tab)/profile/123');
      }}>Details</Button>
    </View>
  )
}
export default Profile;
