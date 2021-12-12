import React from 'react';
import { TextInput as NativeTextInput, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  error: {
    borderWidth: 1,
    borderColor: '#d73a4a',
    borderRadius:5,
    marginBottom:5
  }
});

const TextInput = ({ style, error, ...props }) => {
  const errorStyle = error ? styles.error : null;
  const textInputStyle = [style, errorStyle];

  return <NativeTextInput style={textInputStyle} {...props} />;
};

export default TextInput;