import React from 'react';
import { GestureResponderEvent, StyleSheet, Text, TouchableOpacity } from 'react-native';

interface ButtonProps {
  children: React.ReactNode;
  onPress?: (event: GestureResponderEvent) => void;
  disabled?: boolean;
  style?: object;
}

const Button: React.FC<ButtonProps> = ({ children, onPress, disabled, style, ...props }) => (
  <TouchableOpacity
    onPress={onPress}
    disabled={disabled}
    style={[styles.btn, disabled ? styles.disabled : null, style]}
    {...props}
  >
    <Text style={styles.text}>{children}</Text>
  </TouchableOpacity>
);

export default Button;

const styles = StyleSheet.create({
  btn: {
    backgroundColor: '#007AFF',
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 6,
    alignItems: 'center',
  },
  disabled: {
    backgroundColor: '#A0A0A0',
  },
  text: {
    color: '#fff',
    fontWeight: '600',
    fontSize: 16,
  },
});
