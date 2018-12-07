import { StyleSheet } from 'react-native';
const styles = StyleSheet.create({
	header: {
		height: 80,
		backgroundColor: 'transparent'
	},
	buttonBack: {
		transform: [
			{ translateX: -20 }
		]
	},
	headerText: {
		color: '#fff',
		alignSelf: 'center',
		flex: 1
	},
	buttonAdd: {
		justifyContent: 'center',
		transform: [
			{ translateX: 15 }
		]
	},
	absolute: {
		position: 'absolute',
		top: 80,
		left: 0,
		right: 0,
		bottom: 0,
		flex: 1
	}
});

export { styles };
