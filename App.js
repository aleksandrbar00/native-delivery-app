/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native'
import {ThemeProvider} from "react-native-elements"

import SigninForm from "./src/components/forms/SigninForm";

const App: () => React$Node = () => {

    const navigateApp = () => {
        this.props.navigation.navigate("Feed")
    }

  return (
    <>
      <ThemeProvider>
          <StatusBar barStyle="dark-content" />
          <SafeAreaView style={{flex: 1}}>
              <View style={{flex: 1, justifyContent: "center", padding: 12}}>
                  <SigninForm navigateApp={navigateApp}/>
              </View>
          </SafeAreaView>
      </ThemeProvider>
    </>
  );
};




export default App;
