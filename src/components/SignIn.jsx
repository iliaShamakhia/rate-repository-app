import { Formik } from 'formik';
import React from 'react';

import { Text, View, Pressable, StyleSheet } from 'react-native';
import FormikTextInput from './FormikTextInput';
import theme from '../theme';
import * as yup from 'yup';

const initialValues = {
  username: '',
  password: '',
};

const validationSchema = yup.object().shape({
  username: yup.string().required('Username is required'),
  password: yup.string().required('Password is required')
});

const styles = StyleSheet.create({
  input: {
    marginVertical: 5,
    paddingHorizontal: 5,
    paddingVertical: 10,
    borderWidth: 0.5,
    borderRadius: 5,
    borderColor: 'grey',
  },
  button: {
    marginVertical: 5,
    paddingHorizontal: 5,
    paddingVertical: 10,
  },
});

const SignIn = () => {
  return (
    <Formik initialValues={initialValues} validationSchema={validationSchema}>
      <View style={theme.container}>
      <FormikTextInput style={styles.input} name="username" placeholder="Username" />
      <FormikTextInput style={styles.input} name="password" placeholder="Password" secureTextEntry="true"/>
      <Pressable onPress={()=>console.log("hey")}>
        <View style={{
            backgroundColor: 'blue',
            alignItems: 'center',
            justifyContent: 'center',
            borderRadius: 5,
          }}>
          <Text style={{ color: 'white', fontSize: 20, padding: 10 }}>Sign In</Text>
        </View>
      </Pressable>
    </View>
    </Formik>
  );
};

export default SignIn;