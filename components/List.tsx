import React, { Component } from 'react';
import { FlatList, StyleSheet, Text, View } from 'react-native';
import json from './feed.json';

class List extends Component {
  constructor() {
    super();
    this.state = {
      entries: []
    }
  }
  
  componentDidMount() {
    this.fetchData().done();
  }
  async fetchData() {
    const Entry = global.ncmb.DataStore('Entry');
    const entries = await Entry.fetchAll();
    this.setState({entries: entries});
  }
  render() {
    const moveDetail = (item) => {
      this.props.navigation.navigate('Detail', item);
    }
    this.data = [];
    
    return (
      <View style={styles.container}>
        <FlatList
          data={this.state.entries}
          keyExtractor={(item, index) => item.get('objectId')}
          renderItem={({item}) => 
            <View>
              <Text ellipsizeMode='tail' numberOfLines={1} style={styles.title} onPress={() => moveDetail(item)}>
                {item.get('title')}
              </Text>
              <Text style={styles.date_published}>{item.date_published}</Text>
              <Text ellipsizeMode='tail' numberOfLines={3} style={styles.summary} onPress={() => moveDetail(item)}>
                {item.get('description')}
              </Text>
            </View>
          }
        />
      </View>
    )
  }
}
const styles = StyleSheet.create({
  container: {
   flex: 1,
   paddingTop: 22
  },
  title: {
    padding: 10,
    fontSize: 18,
    height: 44,
    fontWeight: 'bold'
  },
  date_published: {
    textAlign: 'right',
    paddingRight: 20,
    color: 'grey'
  },
  summary: {
    padding: 10,
    fontSize: 18,
    color: '#333',
    height: 80,
  }
});

export default List
