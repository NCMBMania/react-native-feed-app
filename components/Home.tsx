import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import List from './List';

export default class Home extends Component {
  render() {
    const {navigation} = this.props;
    return (
      <View style={styles.container}>
        <Text style={styles.header}>ニュースのヘッダー</Text>
        <List navigation={navigation} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 60,
    backgroundColor: '#fff',
  },
  header: {
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 25
  }
});
