import { Formik } from 'formik';
import React from 'react';

import { Text, View, Pressable, StyleSheet } from 'react-native';
import FormikTextInput from './FormikTextInput';
import theme from '../theme';

const styles = StyleSheet.create({
  input: {
    marginVertical: 10,
    paddingHorizontal: 5,
    paddingVertical: 10,
    borderWidth: 0.5,
    borderRadius: 5,
    borderColor: 'grey',
  },
  button: {
    marginVertical: 10,
    paddingHorizontal: 5,
    paddingVertical: 10,
  },
});

const SignIn = () => {
  return (
    <Formik>
      <View style={theme.container}>
        <View style={styles.input}>
          <FormikTextInput name="userName" placeholder="Username" />
        </View>
      <View style={styles.input}>
        <FormikTextInput name="password" placeholder="Password" />
      </View>
      <Pressable onPress={()=>console.log("hey")}>
        <View style={{
            backgroundColor: 'blue',
            alignItems: 'center',
            justifyContent: 'center',
            borderRadius: 5,
          }}>
          <Text style={{ color: 'white', fontSize: 24, padding: 10 }}>Sign In</Text>
        </View>
      </Pressable>
    </View>
    </Formik>
  );
};

export default SignIn;