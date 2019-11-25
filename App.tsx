import React, {Component} from 'react';
import {createStackNavigator} from 'react-navigation-stack';
import {createAppContainer} from 'react-navigation';
import config from './config.json';
import NCMB from 'ncmb-react-native';
const ncmb = new NCMB(config.applicationKey, config.clientKey);
global.ncmb = ncmb;

import Home from './components/Home';
import Detail from './components/Detail';

const HomeStack = createStackNavigator({
  Home: { screen: Home },
  Detail: { screen: Detail }
});

const HomeContainer = createAppContainer(HomeStack);

export default class App extends Component {
  render() {
    return (
      <HomeContainer ncmb={ncmb} />
    );
  }
}
