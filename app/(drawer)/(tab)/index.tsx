import Button from "@/components/Button";
import Header from "@/components/Header";
import { router } from "expo-router";
import LottieView from "lottie-react-native";
import React, { useEffect } from "react";
import { Image, Text, View } from "react-native";

const Index = () => {

  useEffect(() => {
    javascriptPractices();
  }, [])

  const input = [1, 2, 3, 1, 4, 2, 3,]
  const flatArray = [1, 2, 3, [3, 4, 2, [3]], 4, [[4, 5], 2, 4], [2]]
  const array = [1, 2, null, 4, false, 0, "", null, undefined, 2, NaN]
  const uniqueValues: any[] = [];

  const reversed = 'hello'
  const palindrome = 'madam'
  const vowels = 'Hello World"'
  const nonRepeating = 'swiss'
  const occurrence = 'banana'
  const large = 'I love JavaScript a lot'
  const capitalWord = 'hello world from js'
  const duplicate = 'mississippi'
  const requent = 'abbcccdddde'
  const compression = 'aaabbc'
  const unique = 'abcdefa'
  const firstLetter = 'hello'
  const javascriptPractices = () => {

    // // First letter move to end
    // let text = ''
    // for (let index = 0; index < firstLetter.length; index++) {
    //   const element = firstLetter[index];
    //   if (firstLetter.length - 1 == index) {
    //     text = element + text;
    //   } else {
    //     text += element
    //   }
    // }
    // console.log('text', text);
    

    // // Febnoic serivce
    // const seriesArray = [0, 1];
    // const ten = 10;
    // for (let index = 1; index < ten; index++) {
    //   const previous = seriesArray[index - 1];
    //   const current = seriesArray[index];
    //   const series = current + previous;
    //   seriesArray.push(series);
    // }
    // console.log('seriesArray', seriesArray);

    // // Duplicate Remove
    // for (let index = 0; index < unique.length; index++) {
    //   const element = unique[index];
    //   if (!uniqueValues.includes(element)) {
    //     uniqueValues.push(element);
    //   } else {
    //     console.log('Duplicate value found:', element);
    //   }
    // }
    // if (uniqueValues.length) {
    //   console.log('Unique values:', uniqueValues);
    // }

    // let text = ''
    // // String compression: Replace sequences of the same character with character + count
    // let count = 1;
    // for (let i = 0; i < compression.length; i++) {
    //   if (compression[i] === compression[i + 1]) {
    //     count++;
    //   } else {
    //   text += compression[i] + (count ? count : '');
    //   count = 1;
    //   }
    // }

    // console.log('compressed', text);


    // let obj: any = {}
    // for (let i = 0; i < requent.length; i++) {
    //   const char = requent[i];
    //   if (char === ' ') continue;
    //   obj[char] = (obj[char] || 0) + 1;
    // }
    // let maxChar = '';
    // let maxCount = 0;
    // for (const key in obj) {      
    //   if (obj[key] > maxCount) {
    //     maxCount = obj[key];
    //     maxChar = key;
    //   }
    // }
    // console.log('Most frequent letter:', maxChar, 'appears', maxCount, 'times');
    // console.log('obj', obj, Object.keys(obj)[3]);

    // let text = ''
    // for (let index = 0; index < duplicate.length; index++) {
    //   const element = duplicate[index];
    //   if (!text.includes(element)) {
    //     text += element;
    //   }
    // }
    // console.log('text', text);


    // let text = ''
    // for (let index = 0; index < capitalWord.length; index++) {
    //   const element = capitalWord[index];

    //   if (text.length == 0) {
    //     text = element.toUpperCase();
    //   } else {
    //     if (element == ' ') {
    //       text += ' '
    //       text = text + capitalWord[index + 1].toUpperCase()
    //       index++
    //     } else {
    //       text = text + element;
    //     }
    //   }
    // }
    // console.log('text', text);

    // let count = ''
    // // Find the largest word in the string 'large'
    // const words = [];
    // let word = '';
    // for (let i = 0; i < large.length; i++) {
    //   const char = large[i];
    //   if (char === ' ') {
    //     if (word.length > 0) {
    //       words.push(word);
    //       word = '';
    //     }
    //   } else {
    //     word += char;
    //   }
    // }
    // if (word.length > 0) {
    //   words.push(word);
    // }
    // let largestWord = '';
    // for (let i = 0; i < words.length; i++) {
    //   if (words[i].length > largestWord.length) {
    //     largestWord = words[i];
    //   }
    // }
    // count = largestWord;
    // console.log('count', count);


    // let reversed = '';
    // for (let index = 0; index < text.length; index++) {
    //   const element = text[index];
    //   console.log('fofof', element);
    //   reversed = element + reversed;
    // }
    // console.log('reversed', reversed);

    // const isPalindrome = true;
    // let text: string = '';
    // for (let index = 0; index < palindrome.length; index++) {
    //   const element = palindrome[index];
    //   text = element + text;
    // }
    // if (text === palindrome) {
    //   console.log('isPalindrome', isPalindrome);
    // } else {
    //   console.log('isPalindrome', !isPalindrome);
    // }

    // let count = 0;
    // for (let index = 0; index < vowels.length; index++) {
    //   const element = vowels[index];
    //   if (element == 'a' || element == 'e' || element == 'i' || element == 'o' || element == 'u') {
    //     console.log('Vowel found:', element);
    //     count++;
    //   }
    // }
    // console.log('Total vowels found:', count);

    // let seen: any= {};
    // for (let index = 0; index < nonRepeating.length; index++) {
    //   const element = nonRepeating[index];
    //   seen[element] = (seen[element] || 0) + 1
    // }
    // // Find the first non-repeating character
    // for (let index = 0; index < nonRepeating.length; index++) {
    //   const element = nonRepeating[index];
    //   if (seen[element] === 1) {
    //   console.log('First non-repeating letter:', element);
    //   break;
    //   }
    // }
    // console.log('seen', seen);

    // let obj: any = {}
    // for (let index = 0; index < occurrence.length; index++) {
    //   const element = occurrence[index];
    //   obj[element] = (obj[element] || 0) + 1
    // }
    // console.log('repeat chart', obj.a);

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

    // let Occurrences: { [key: number]: number } = {};
    // for (let index = 0; index < input.length; index++) {
    //   const element = input[index];
    //   Occurrences[element] = (Occurrences[element] || 0) + 1;
    // }
    // // console.log('Occurrences', Occurrences);

    // // Find the first non-repeating element
    // for (let index = 0; index < input.length; index++) {
    //   const element = input[index];

    //   if (Occurrences[element] === 1) {
    //     console.log('First non-repeating element', element);
    //     break;
    //   }
    // }

    // Return all indices of a target number in an array
    // const target = 2;
    // const targetIndex = [];
    // for (let index = 0; index < input.length; index++) {
    //   const element = input[index];
    //   if (element === target) {
    //     targetIndex.push(index);
    //   }
    // }
    // console.log('targetIndex', targetIndex);

    // const flat: any = [];
    // const flattenArray = (arr: any[]) => {
    //   for (let i = 0; i < arr.length; i++) {
    //     const element = arr[i];
    //     if (Array.isArray(element)) {
    //       flattenArray(element);
    //     } else {
    //       flat.push(element);
    //     }
    //   }
    // };
    // flattenArray(flatArray);
    // console.log('flat', flat);

    // const chunk = 2;
    // const chunkedArray = [];
    // for (let index = 0; index < input.length; index++) {
    //   const element = input[index];
    //   if (index % chunk === 0) {
    //     chunkedArray.push(input.slice(index, index + chunk));
    //   }
    // }
    // console.log('chunkedArray', chunkedArray);
    // const arr = []
    // for (let index = 0; index < input.length; index++) {
    //   const element = input[index];
    //   if (input.length - 1 == index) {
    //     arr.unshift(element)
    //   } else {
    //     arr.push(element);
    //   }

    // }
    // console.log('arr', arr);

    // const filteredArray = [];
    // for (let index = 0; index < array.length; index++) {
    //   const element = array[index];
    //   if (element != null && element !== false && element !== 0 && element !== "" && element !== undefined && !Number.isNaN(element)) {
    //     filteredArray.push(element);
    //   }
    // }
    // console.log('filteredArray', filteredArray);




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
      <LottieView
        source={require("../../../assets/animations/data.json")}
        autoPlay
        loop={true} // play only once
        style={{ width: 200, height: 200 }}
      />
       <Image
        source={require("../../../assets/animations/gym.gif")}
        style={{ width: 200, height: 200 }}
      />
      {/* </View> */}
    </View>
  )
}
export default Index;
