import 'react-native-gesture-handler';
import React, {useEffect, useState} from 'react';
import {Dimensions, StatusBar} from 'react-native';
import {View, Text} from 'react-native';
import {firebase} from './config/firebase';
const {width, height} = Dimensions.get('window');

const MyTheme = {
  dark: false,
  colors: {},
  height: height,
  width: width,
};

const App = props => {
  useEffect(() => {
    // firebase
    //   .database()
    //   .ref('raja/')
    //   .on('value', data => {
    //     console.log(data);
    //   });
    firebase
      .firestore()
      .collection('database')
      .get()
      .then(snapshot => {
        snapshot.forEach(doc => console.log(doc));
      });
  }, []);
  return (
    <View>
      <Text>asda</Text>
    </View>
  );
};
export default App;
