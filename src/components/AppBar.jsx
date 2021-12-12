import React from 'react';
import { View, StyleSheet, Pressable, Text, ScrollView } from 'react-native';
import Constants from 'expo-constants';
import theme from '../theme';
import { Link } from "react-router-native";

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
        <ScrollView horizontal>
          <Pressable>
            <Link to="/">
              <Text style={styles.text}>Repositories</Text>
            </Link>
          </Pressable>
          <Pressable>
            <Link to="/signin">
              <Text style={styles.text}>Sign In</Text>
            </Link>
          </Pressable>
        </ScrollView>
      </View>;
};

export default AppBar;