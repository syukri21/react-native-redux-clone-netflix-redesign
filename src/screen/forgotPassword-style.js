import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
	// Structure

	content: {
		backgroundColor: 'black'
	},
	contentWrap: {
		height: 400,
		justifyContent: 'center',
		padding: 20
	},
	footer: {
		backgroundColor: 'black',
		borderTopWidth: 2,
		borderTopColor: '#410D0C',
		padding: 4
	},
	// Components
	signUp: {
		flexDirection: 'row',
		justifyContent: 'flex-end',
		alignItems: 'center'
	},
	text: {
		color: '#fff',
		textAlign: 'center',
		marginBottom: 10
	},
	footerText: {
		textAlign: 'center',
		color: '#fff',
		fontSize: 12
	},

	buttonSignIn: {
		borderRadius: 4
	},
	icon: {
		color: 'white'
	},
	input: {
		color: '#fff'
	},
	newUser: {
		color: '#A07433'
	},
	// color
	bgBlack: {
		backgroundColor: 'black'
	},
	childCenter: {
		alignSelf: 'center'
	},
	mt10: {
		marginTop: 10
	},
	p0: {
		padding: 0
	}
});

export { styles };
