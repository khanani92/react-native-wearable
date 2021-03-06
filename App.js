/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';
import reducers from './src/reducers';
import thunk from "redux-thunk";
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux';

import Routes from './src/routes';

// 

const composeEnhancers = compose;
const store = createStore(
  reducers,
  composeEnhancers(applyMiddleware(thunk))

);


class App extends Component {
  render () {
    return (
      <Provider store={store}>
        <Routes />
      </Provider>
    );
  }
}



export default App;