import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { Icon } from 'react-native-elements';

class SettingScreen extends Component {
	static navigationOptions = {
		title: 'Settings',
		headerStyle: { backgroundColor: '#FE2909' },
		headerTitleStyle: { color: 'white'},
		tabBarIcon: ({ tintColor }) => <Icon name="settings" size={25} color={tintColor} />
	}
	render() {
		return (
			<View>
				<Text>SettingScreen></Text>
				<Text>SettingScreen></Text>
				<Text>SettingScreen></Text>
				<Text>SettingScreen></Text>
				<Text>SettingScreen></Text>
				<Text>SettingScreen></Text>
			</View>
		);
	}
}

export default SettingScreen;
