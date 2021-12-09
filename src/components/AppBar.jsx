import React from 'react';
import { View, StyleSheet, Pressable, Text } from 'react-native';
import Constants from 'expo-constants';
import theme from '../theme';

const styles = StyleSheet.create({
  container: {
    paddingTop:Constants.statusBarHeight,
    backgroundColor: theme.colors.textPrimary
  },
  text:{
    color:"#ffffff",
    fontWeight:'bold',
    padding:5
  }
});

const AppBar = () => {
  return <View style={styles.container}>
        <Pressable onPress={()=>console.log("hey")}>
            <Text style={styles.text}>Repositories</Text>
        </Pressable>
      </View>;
};

export default AppBar;