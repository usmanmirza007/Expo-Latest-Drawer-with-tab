import React, { forwardRef } from 'react';
import { StyleSheet, Text, TextInput, TextInputProps, View } from 'react-native';

interface InputProps extends TextInputProps {
  label: string;
  error?: string;
}

const Input = forwardRef<TextInput, InputProps>(({ label, error, ...props }, ref) => (
  <View style={styles.inputGroup}>
    <Text style={styles.label}>{label}</Text>
    <TextInput
      ref={ref}
      {...props}
      style={[styles.input, error ? styles.inputError : null]}
      placeholderTextColor="#999"
    />
    {error ? <Text style={styles.error}>{error}</Text> : null}
  </View>
));

export default Input;

const styles = StyleSheet.create({
  inputGroup: {
    marginBottom: 15,
  },
  label: {
    fontWeight: '600',
    marginBottom: 6,
    color: '#333',
    fontSize: 14,
  },
  input: {
    height: 40,
    borderColor: '#bbb',
    borderWidth: 1,
    borderRadius: 4,
    paddingHorizontal: 10,
    fontSize: 16,
    color: '#000',
    backgroundColor: '#fff',
  },
  inputError: {
    borderColor: 'red',
  },
  error: {
    marginTop: 4,
    color: 'red',
    fontSize: 12,
  },
});
