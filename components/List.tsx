import React, { Component } from 'react';
import { FlatList, StyleSheet, Text, View } from 'react-native';
import json from './feed.json';
class List extends Component {
  render() {
    const moveDetail = (item) => {
      this.props.navigation.navigate('Detail', item);
    }
    return (
      <View style={styles.container}>
        <FlatList
          data={data}
          renderItem={({item}) => 
            <View>
              <Text ellipsizeMode='tail' numberOfLines={1} style={styles.title} onPress={() => moveDetail(item)}>
                {item.title}
              </Text>
              <Text style={styles.date_published}>{item.date_published}</Text>
              <Text ellipsizeMode='tail' numberOfLines={3} style={styles.summary} onPress={() => moveDetail(item)}>
                {item.summary}
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

const data = json.item;

export default List
