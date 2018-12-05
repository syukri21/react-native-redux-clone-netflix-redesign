import { StyleSheet } from 'react-native';
const styles = StyleSheet.create({
	content: {
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
			{ translateY: -10 }
		],
		color: 'white',
		fontSize: 20
	},
	text: {
		color: '#fff'
	},
	itemInput: {
		height: 50,
		color: 'white',
		borderBottomColor: 'white',
		borderBottomWidth: 2
	},
	checkBoxItem: {
		justifyContent: 'space-around',
		flexDirection: 'row',
		marginTop: 30,
		borderBottomWidth: 0,
		color: 'white'
	},
	icon: {
		color: '#fff',
		transform: [
			{ translateX: -10 }
		]
	},
	input: {
		color: 'white',
		fontSize: 20
	},
	buttonSignUp: {
		borderRadius: 10,
		overflow: 'hidden',
		height: 60
	},
	absolute: {
		position: 'absolute',
		height: '100%',
		width: '100%',
		top: 80,
		left: 0,
		right: 0,
		bottom: 0,
		flex: 1
	},
	buttonSignIn: {
		borderRadius: 10,
		overflow: 'hidden',
		height: 60
	}
});

export { styles };
