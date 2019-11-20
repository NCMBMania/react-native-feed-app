import React, {Component} from 'react';
import {createStackNavigator} from 'react-navigation-stack';
import {createAppContainer} from 'react-navigation';

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
      <HomeContainer />
    );
  }
}
