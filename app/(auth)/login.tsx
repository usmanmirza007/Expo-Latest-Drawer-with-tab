import LoginForm from '@/modules/auth/components/loginForm';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function LoginPage() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Login</Text>
      <LoginForm />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,               // full height
    padding: 20,
    justifyContent: 'center', // center vertically
    backgroundColor: '#fff',  // white background
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
});
