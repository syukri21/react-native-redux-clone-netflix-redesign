import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
	// Structure
	container: {
		flex: 1,
		backgroundColor: '#000'
	},
	contentUp: {
		flex: 0.8,
		justifyContent: 'center',
		alignItems: 'center',
		flexDirection: 'row'
	},
	contentDown: {
		flex: 4
	},
	footer: {
		backgroundColor: 'black'
	},
	// Components
	title: {
		fontSize: 30,
		color: '#2A90ED'
	},
	form: {
		padding: 10
	},
	label: {
		fontSize: 20,
		lineHeight: 16,
		color: '#686566'
	},
	icon: {
		transform: [
			{ translateX: -10 }
		],
		color: 'white'
	},
	buttonGroup: {
		padding: 10
	},
	buttonForgotPass: {
		fontSize: 12,
		color: '#dfdfdf'
	},
	buttonSignIn: {
		borderRadius: 4
	},
	buttonSignUp: {
		color: 'white',
		fontSize: 15
	},
	input: {
		color: 'white'
	},
	// Color
	red: {
		color: '#B7135C'
	}
});

export { styles };
