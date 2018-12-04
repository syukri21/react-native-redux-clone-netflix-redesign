import { StyleSheet } from 'react-native';
const styles = StyleSheet.create({
	content: {
		backgroundColor: 'black',
		padding: 20
	},
	form: {
		flex: 1
	},
	card: {
		alignSelf: 'center',
		backgroundColor: 'black',
		flex: 1
	},
	// util
	bgBlack: {
		backgroundColor: 'black',
		borderColor: 'black'
	},
	float: {
		transform: [
			{ translateY: -5 }
		]
	},
	text: {
		color: '#fff'
	},
	itemInput: {
		height: 50,
		color: 'white'
	},
	checkBoxItem: {
		justifyContent: 'space-around',
		flexDirection: 'row',
		marginTop: 30
	},
	icon: {
		color: '#fff',
		transform: [
			{ translateX: -10 }
		]
	},
	input: {
		color: '#fff'
	},
	buttonSignUp: {
		borderRadius: 4,
		marginTop: 10
	}
});

export { styles };
