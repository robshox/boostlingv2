import Expo from 'expo';
import React, { Component } from 'react';
import { StyleSheet, View } from 'react-native';
import { TabNavigator, StackNavigator } from 'react-navigation';
import { Provider } from 'react-redux';

import store from './store';
import AuthScreen from './screens/AuthScreen';
import WelcomeScreen from './screens/WelcomeScreen';
import FoldersScreen from './screens/FoldersScreen';
import DeckScreen from './screens/DeckScreen';
import SettingScreen from './screens/SettingScreen';
import ReviewScreen from './screens/ReviewScreen';

class App extends Component {

  render() {
      console.log('test');
      const MainNavigator = TabNavigator({
        //Welcome and Auth
        welcome: { screen: WelcomeScreen },
        auth: { screen: AuthScreen },
        //Stack Setup
        main: {
          screen: StackNavigator({
              mainnav: {
                screen: TabNavigator({
                folders: { screen: FoldersScreen },
                settings: { screen: SettingScreen }
              }, { tabBarOptions: {
                    activeTintColor: 'white',
                    upperCaseLabel: true,
                    //activeBackgroundColor: '#FE2909',
                    style: {
                      //backgroundColor: 'blue',
                    }
                  }
                })
            }
          },
          )
        }
    }, {
        navigationOptions: {
          tabBarVisible: false,
        },
        lazy: true
    });
      return (
        <Provider store={store}>
          <View style={styles.container}>
            <MainNavigator />
          </View>
        </Provider>
      );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'red',
    //alignItems: 'center',
    justifyContent: 'center'
  }
});


Expo.registerRootComponent(App);
