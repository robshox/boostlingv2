import React, { Component } from 'react';
import { View, Text, FlatList } from 'react-native';
import { Button, Icon } from 'react-native-elements';


import FlatListDemo from '../components/FlatListDemo';

class FoldersScreen extends Component {
	static navigationOptions = ({ navigation }) => ({
		title: 'Folders',
		headerStyle: { backgroundColor: '#FE2909' },
		headerTitleStyle: { color: 'white' },
		tabBarIcon: ({ tintColor }) => <Icon name="folder" size={25} color={ '#FE2909' } />,
		headerRight:
		          <Button
		            title="Add"
		            onPress={() => navigation.navigate('add')}
		            backgroundColor="rgba(0,0,0,0)"
		            color="white"
		          />
	});
	render() {
		return (
				
				<FlatListDemo />
		);
	}
}

export default FoldersScreen;
