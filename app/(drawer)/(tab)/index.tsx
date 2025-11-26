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
  const largeWord = 'I love JavaScript a lot'
  const capitalWord = 'hello world from js'
  const duplicate = 'mississippi'
  const frequency = 'abbcccdddde'
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

    // // Anagram Check - Check if two strings are anagrams of each other    
    // function areAnagrams(s1, s2) {
    //   // Step 1: Length check
    //   if (s1.length !== s2.length) return false;

    //   const count = {};

    //   // Step 2: Count characters in s1
    //   for (const char of s1) {
    //     count[char] = (count[char] || 0) + 1;
    //   }

    //   // Step 3: Decrement for s2
    //   for (const char of s2) {
    //     if (!count[char]) return false;
    //     count[char]--;
    //     if (count[char] === 0) delete count[char];
    //   }

    //   return Object.keys(count).length === 0;
    // }

    // // Test
    // console.log(areAnagrams("listen", "silent")); // true
    // console.log(areAnagrams("hello", "bello"));   // false

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
    // for (let i = 0; i < frequency.length; i++) {
    //   const char = frequency[i];
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
    // console.log('Most frequency letter:', maxChar, 'appears', maxCount, 'times');
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
    // for (let i = 0; i < largeWord.length; i++) {
    //   const char = largeWord[i];
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
    // // Time Complexity: O(n²)
    // // Space Complexity: O(n) (ignoring output array)

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
    // // Time Complexity: O(n²)
    // // Space Complexity: O(n) (ignoring output array)

    // const filteredArray = [];
    // for (let index = 0; index < array.length; index++) {
    //   const element = array[index];
    //   if (element != null && element !== false && element !== 0 && element !== "" && element !== undefined && !Number.isNaN(element)) {
    //     filteredArray.push(element);
    //   }
    // }
    // console.log('filteredArray', filteredArray);
    // // Time Complexity: O(n)
    // // Space Complexity: O(n) (ignoring output array)

    // // Find all pairs whose sum equals a target
    // function findPairs(arr: number[], target: number) {
    //   const result = [];
    //   for (let i = 0; i < arr.length; i++) {
    //     for (let j = i + 1; j < arr.length; j++) {
    //       if (arr[i] + arr[j] === target) {
    //         result.push([arr[i], arr[j]]);
    //       }
    //     }
    //   }
    //   return result;
    // }

    // console.log(findPairs([2, 4, 3, 5, 7], 7)); // [ [2,5], [4,3] ]
    // // Time Complexity: O(n²)
    // // Space Complexity: O(1) (ignoring output array)

    // // Find the second largest number
    // function secondLargest(arr) {
    //   if (arr.length < 2) return null; // Not enough elements

    //   let first = -Infinity;
    //   let second = -Infinity;

    //   for (let num of arr) {
    //     if (num > first) {
    //       second = first;
    //       first = num;
    //     } else if (num > second && num < first) {
    //       second = num;
    //     }
    //   }

    //   return second === -Infinity ? null : second;
    // }

    // // Examples
    // console.log(secondLargest([5, 1, 8, 3, 8])); // 5
    // console.log(secondLargest([10, 10, 10]));   // null
    // console.log(secondLargest([1]));            // null
    // // Time Complexity: O(n log n)
    // // Space Complexity: O(n) (ignoring output array)

    // // Majority Element: Find the element that appears more than n/2 times
    // function majorityElement(nums) {
    //   let candidate = null;
    //   let count = 0;

    //   for (const num of nums) {
    //     if (count === 0) {
    //       candidate = num;
    //     }
    //     count += (num === candidate) ? 1 : -1;
    //   }

    //   return candidate;
    // }

    // // Test
    // const nums = [3, 3, 4, 2, 3, 3, 3];
    // console.log(majorityElement(nums)); // Output: 3



    // ############################## number problems ##############################

    // // Prime Number Check
    // function isPrime(n) {
    //   if (n <= 1) return false;
    //   if (n <= 3) return true;
    //   if (n % 2 === 0 || n % 3 === 0) return false;

    //   // Check divisors from 5 to sqrt(n)
    //   for (let i = 5; i * i <= n; i += 6) {
    //     if (n % i === 0 || n % (i + 2) === 0) {
    //       return false;
    //     }
    //   }

    //   return true;
    // }

    // // Test cases
    // console.log(isPrime(97));  // true
    // console.log(isPrime(1));   // false
    // console.log(isPrime(4));   // false
    // console.log(isPrime(13));  // true
    // console.log(isPrime(100)); // false

    // // Nth Prime Number
    // function nthPrime(n) {
    //   if (n === 1) return 2;

    //   const primes = [2];
    //   let num = 3; // start checking from 3

    //   while (primes.length < n) {
    //     let isPrime = true;

    //     // Check if num is divisible by any previous prime
    //     for (const p of primes) {
    //       if (p * p > num) break; // optimization: only check up to sqrt(num)
    //       if (num % p === 0) {
    //         isPrime = false;
    //         break;
    //       }
    //     }

    //     if (isPrime) {
    //       primes.push(num);
    //     }
    //     num += 2; // skip even numbers
    //   }

    //   return primes[primes.length - 1];
    // }

    // // Test
    // console.log(nthPrime(6));  // Output: 13
    // console.log(nthPrime(1));  // 2
    // console.log(nthPrime(5));  // 11

    // // Factorial Calculation
    // function factorial(n) {
    //   if (n < 0) return undefined; // factorial not defined for negative
    //   if (n === 0 || n === 1) return 1;

    //   let result = 1;
    //   for (let i = 2; i <= n; i++) {
    //     result *= i;
    //   }
    //   return result;
    // }

    // // Test
    // console.log(factorial(5));  // 120
    // console.log(factorial(0));  // 1
    // console.log(factorial(6));  // 720

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
        source={require("../../../assets/animations/PushUps.json")}
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
