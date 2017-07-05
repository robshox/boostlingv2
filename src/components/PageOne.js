import React, { Component } from 'react';
import { View, StyleSheet, ScrollView, Text, FlatList } from 'react-native';
import { Actions } from 'react-native-router-flux';
import { BottomTabs } from './common';

export default class PageOne extends Component {
  render() {
    return (

      <View style={styles.container}>
              <View style={[styles.header]}></View>

              <ScrollView>
                <View style={[styles.content]}>
                  <View style={[styles.box]}></View>
                  <View style={[styles.box]}></View>
                  <View style={[styles.box]}>
                    <Text onPress={Actions.pageTwo}>This is PageTwo!</Text>
                  </View>
                  <View style={[styles.box]}>
                  <FlatList
                    data={[{key: 'a'}, {key: 'b'}]}
                    renderItem={({item}) => <Text>{item.key}</Text>}
                  />
                  </View>
                  <View style={[styles.box]}></View>
                  <View style={[styles.box]}></View>
                  <View style={[styles.box]}></View>
                </View>
              </ScrollView>
              <View style={[styles.footer]}></View>
            </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center'
  },
  header: {
    height: 40,
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    backgroundColor: '#03A9F4',
    zIndex: 10
  },
  content: {
    alignItems: 'center',
    marginTop: 50,
    marginBottom: 40
  },
  footer: {
    height: 70,
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: '#8BC34A'
  },
  box: {
    width: 100,
    height: 100,
    backgroundColor: '#efefef',
    marginBottom: 10
  }
});
