import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { Button, Icon } from 'react-native-elements';

class TemplateListScreen extends Component {
	static navigationOptions = ({ navigation }) => ({
		title: 'Folder Title',
		headerTintColor: '#FE2909' ,
		tabBarIcon: ({ tintColor }) => <Icon name="list" size={35} color={tintColor} />,
		headerRight:
		<Button title="Settings"
				onPress={() => navigation.navigate('settings')}
				backgroundColor="rgba(0,0,0,0)"
				color="rgba(0, 122, 255, 1)"
		/>,
	tabBarOptions: { upperCaseLabel: true }
	})


	render() {
		return (
			<View>
				<Text>Process></Text>
				<Text>Process></Text>
				<Text>Process></Text>
				<Text>Process></Text>
				<Text>Process></Text>
				<Text>Process></Text>
			</View>
		);
	}
}

export default TemplateListScreen;
