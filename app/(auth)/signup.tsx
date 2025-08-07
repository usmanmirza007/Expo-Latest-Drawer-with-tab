import SignupForm from '@/modules/auth/components/signupForm';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function SignupPage() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Sign Up</Text>
      <SignupForm />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,               // fill the screen vertically
    padding: 20,
    justifyContent: 'center', // center content vertically
    backgroundColor: '#fff',  // white background
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
});
