/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';
import './config/ReactotronConfig';

import { StyleSheet, StatusBar } from 'react-native';

import { Colors } from 'react-native/Libraries/NewAppScreen';
import Routes from './routes';

const App = () => {
  return (
    <>
      <StatusBar barStyle="light-content" backgroundColor="#7159c1 " />
      <Routes />
    </>
  );
};

export default App;
