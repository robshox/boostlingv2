import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Icon, Button } from 'react-native-elements';
import { NavigationActions } from 'react-navigation'

class AddScreen extends Component {
	static navigationOptions = ({ navigation }) => ({
		title: 'Add',
		headerStyle: { backgroundColor: '#FE2909' },
		headerTitleStyle: { color: 'white'},
		headerBackTitleStyle: { color: 'white'},
		headerTintColor: 'white',
		header: null //Hides Header
	})

	render() {
		const { navigate } = this.props.navigation;
		return (
			<View style={styles.container}>
				<Button
					  large
					  iconRight

					  title='Folder'
					  backgroundColor='#FE2909'
			     />
				 <Button
					   large
					   iconRight

					   title='Template'
					   backgroundColor='#FE2909'
					   style={styles.button}
				  />
				  <Button
   					 large
   					 iconRight

   					 title='Step'
   					 backgroundColor='#FE2909'
   					 style={styles.button}
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
	container: {
    flex: 1,
    //backgroundColor: 'red',
    //alignItems: 'space-around'
	justifyContent: 'flex-end',
	marginBottom: 20
	},
	button: {
		marginTop: 20
	}
})

export default AddScreen;
