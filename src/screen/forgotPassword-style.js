import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
	// Structure

	content: {
		backgroundColor: 'transparent',
		height: '100%',
		paddingTop: 80
	},
	contentWrap: {
		height: 400,
		justifyContent: 'center',
		padding: 20
	},
	footer: {
		backgroundColor: 'transparent',
		paddingLeft: 20,
		paddingRight: 20,
		height: 160,
		alignItems: 'center'
	},
	// Components
	signUp: {
		flexDirection: 'row',
		justifyContent: 'flex-end',
		alignItems: 'center',
		transform: [
			{ translateY: -100 }
		]
	},
	text: {
		color: '#fff',
		textAlign: 'center',
		marginBottom: 10,
		fontSize: 18
	},
	footerText: {
		textAlign: 'center',
		color: '#fff',
		fontSize: 14
	},

	buttonSignIn: {
		borderRadius: 10,
		marginTop: 50,
		overflow: 'hidden',
		height: 55
	},
	icon: {
		color: 'white'
	},
	input: {
		color: '#fff'
	},
	newUser: {
		color: '#474DB0'
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
	},
	absolute: {
		position: 'absolute',
		top: 0,
		left: 0,
		bottom: 0,
		right: 0
	}
});

export { styles };
