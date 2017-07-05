import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { Icon } from 'react-native-elements';

class TeamScreen extends Component {
	static navigationOptions = {
		title: 'Team',
		headerStyle: { backgroundColor: '#FE2909' },
		headerTitleStyle: { color: 'white'},
		tabBarIcon: ({ tintColor }) => <Icon name="people" size={25} color={tintColor} />
	}
	render() {
		return (
			<View>
				<Text>TeamScreen></Text>
				<Text>SettingScreen></Text>
				<Text>SettingScreen></Text>
				<Text>SettingScreen></Text>
				<Text>SettingScreen></Text>
				<Text>SettingScreen></Text>
			</View>
		);
	}
}

export default TeamScreen;
