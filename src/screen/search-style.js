import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
	header: {
		backgroundColor: 'black',
		padding: 0,
		height: 70
	},
	icon: {
		color: 'black',
		fontSize: 40,
		position: 'absolute',
		top: 0,
		right: 0,
		width: 50
	},
	iconSearch: {
		left: 0
	},
	text: {
		color: 'white',
		fontSize: 16
	},
	itemLeft: {
		backgroundColor: 'black',
		flex: 3
	},
	itemRight: {
		backgroundColor: 'black',
		flex: 1,
		alignItems: 'center',
		justifyContent: 'center',
		padding: 0
	},
	inputSearch: {
		width: '100%',
		backgroundColor: '#dfdfdf',
		borderRadius: 20,
		paddingLeft: 60
	},
	button: {
		height: '100%'
	},
	content: {
		backgroundColor: '#1E1E1E'
	},
	buttonBack: {
		flexDirection: 'row',
		height: '100%',
		borderRadius: 0
	}
});

export { styles };
