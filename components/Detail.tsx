import React from 'react';
import { View, StyleSheet, Text, ScrollView } from 'react-native';
import HTMLView from 'react-native-htmlview';

class Detail extends React.Component {
    render() {
        const item = this.props.navigation.state.params;
        return (
            <View style={styles.container}>
              <Text style={styles.title}>{item.get('title')}</Text>
              <Text style={styles.date_published}>{item.get('pubDate')}</Text>
              <ScrollView style={styles.scrollView}>
                <HTMLView stylesheet={styles.body} value={item.get('content')} />
              </ScrollView>
            </View>
        );
    }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 22
  },
  title: {
    padding: 10,
    height: 88,
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 25
  },
  date_published: {
    textAlign: 'right',
    paddingRight: 20,
    color: 'grey'
  },
  scrollView: {
    padding: 10,
    paddingTop: 20,
  },
  body: {
    fontSize: 100,
    height: 500,
  }
});

export default Detail;