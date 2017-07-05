import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Icon, FormLabel, FormInput, Button } from 'react-native-elements';
import { NavigationActions } from 'react-navigation'

class AddStepScreen extends Component {
	static navigationOptions = {
		title: 'Add Step',
		headerStyle: { backgroundColor: '#FE2909' },
		headerTitleStyle: { color: 'white'},
		tabBarIcon: ({ tintColor }) => <Icon name="settings" size={25} color={tintColor} />,
		headerLeft: null
	}
	render() {
		return (
			<View>

				<FormLabel>Step Name</FormLabel>
				<FormInput />
				<FormLabel>Template Name</FormLabel>
				<FormInput />
				<FormLabel>Folder Name</FormLabel>
				<FormInput />
				<Button
				   large
				   iconRight
				   title='Create'
				   backgroundColor='#FE2909'
				   onPress={() => navigate('addStep')}
			  	/>
				<Button
   				large
   				iconRight
   				title='Cancel'
   				backgroundColor='#4A4A4A'
   				style={styles.button}
				onPress={() => this.props.navigation.dispatch(resetAction)}
   		   		/>



			</View>
		);
	}
}

const resetAction = NavigationActions.reset({
  index: 0,
  actions: [
	NavigationActions.navigate({ routeName: 'mainnav'})
  ]
})

const styles = StyleSheet.create({
	button: {
		marginTop: 20
	}
})


export default AddStepScreen;
