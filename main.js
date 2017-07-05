import Expo from 'expo';
import React, { Component } from 'react';
import { StyleSheet, View } from 'react-native';
import { TabNavigator, StackNavigator } from 'react-navigation';
import { Provider } from 'react-redux';

import store from './store';
import AuthScreen from './screens/AuthScreen';
import WelcomeScreen from './screens/WelcomeScreen';
import TeamScreen from './screens/TeamScreen';
import AddStepScreen from './screens/AddStepScreen';
import AddScreen from './screens/AddScreen';
import FoldersScreen from './screens/FoldersScreen';
import DeckScreen from './screens/DeckScreen';
import SettingScreen from './screens/SettingScreen';
import TemplateListScreen from './screens/TemplateListScreen';

class App extends Component {

  render() {
      console.log('test');



     const MainNavigator = StackNavigator({

       mainnav: {
         screen: TabNavigator({
            folders: { screen: FoldersScreen },
            team: { screen: TeamScreen },
            settings: { screen: SettingScreen },

         }, { tabBarIcon: { color: 'red'} })
       },
       template: { screen: TemplateListScreen },
       add: { screen: AddScreen },
       addStep: { screen: AddStepScreen }
     }, {
      navigationOptions: {
        //headerMode: 'none'
      },
      lazyLoad: true,
    },
    {
transitionConfig: () => ({ screenInterpolator: () => null }),
}
     );

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
    //backgroundColor: 'red',
    //alignItems: 'center',
    //justifyContent: 'center'
  }
});


Expo.registerRootComponent(App);
