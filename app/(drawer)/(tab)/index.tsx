import Button from "@/components/Button";
import Header from "@/components/Header";
import { router } from "expo-router";
import React, { useEffect } from "react";
import { Text, View } from "react-native";
const Index = () => {

  useEffect(() => {
    javascriptPractices();
  }, [])

  const input = [1, 2, 3, 1, 4, 2, 3,]
  const uniqueValues: any[] = [];

  const javascriptPractices = () => {
    // for (let index = 0; index < input.length; index++) {
    //   const element = input[index];
    //   if (!uniqueValues.includes(element)) {
    //     uniqueValues.push(element);
    //   }
    // }

    // for (let i = 0; i < input.length; i++) {
    //   for (let j = i + 1; j < input.length; j++) {
    //     if (input[i] > input[j]) {
    //       let temp = input[i];
    //       input[i] = input[j];
    //       input[j] = temp;
    //     }
    //   }
    // }
    // console.log('uniqueValues', input[input.length - 2]);

    // for (let index = 0; index < input.length; index++) {
    //   const element = input[index];
    //   if(element % 2 == 0) {
    //     console.log(element);
    //   }
    // }

    // let isSorted = true;
    // for (let index = 0; index < input.length; index++) {
    //   const element = input[index];
    //   if (element > input[index + 1]) {
    //     isSorted = false 
    //     break
    //   }
    // }
    // console.log('isSorted', isSorted);

    // const missingElements: number[] = [];
    // // Find missing elements in a sorted array of consecutive numbers
    // for (let i = 0; i < input.length - 1; i++) {
    //   const current = input[i];

    //   const next = input[i + 1];
    //   console.log('current', next);
    //   if (next - current > 1) {
    //   for (let missing = current + 1; missing < next; missing++) {
    //     missingElements.push(missing);
    //   }
    //   }
    // }
    // console.log('missingElements', missingElements);
    let Occurrences: { [key: number]: number } = {};
    for (let index = 0; index < input.length; index++) {
      const element = input[index];
      Occurrences[element] = (Occurrences[element] || 0) + 1;
    }
    console.log('Occurrences', Occurrences);
    

  }



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
