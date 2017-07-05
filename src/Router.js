
import { Scene, Router, Actions } from 'react-native-router-flux';
import React, { Component } from 'react';

import PageOne from './components/PageOne';
import PageTwo from './components/PageTwo';

const RouterComponent = () => {
	return (
		<Router navigationBarStyle={ styles.navigationBarStyle } titleStyle= { styles.titleStyle }>
	 <Scene key="root">
	   <Scene key="pageOne" component={PageOne} title="PageOne" initial={true} />
	   <Scene key="pageTwo" component={PageTwo} title="PageTwo" />
	 </Scene>
   </Router>
	);
};

const styles = {
	navigationBarStyle: {
		backgroundColor: '#FE2909',
		borderBottomColor: '#FE2909'
  },
	titleStyle: {
	textAlign: 'center',
	color: '#ffffff',
	fontSize: 18,
	width: 180,
	alignSelf: 'center',
	}
};

export default RouterComponent;
