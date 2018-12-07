import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
	black        : {
		backgroundColor : 'black'
	},
	animatedView : {
		flex            : 1,
		margin          : 0,
		padding         : 0,
		flexDirection   : 'row',
		backgroundColor : '#333333'
	},
	cardItem     : {
		flex            : 2,
		padding         : 0,
		backgroundColor : 'transparent'
	},
	image        : {
		width  : '100%',
		height : 120,
		flex   : 1
	},
	text         : {
		color : 'white'
	},
	transparent  : {
		backgroundColor : 'transparent'
	}
});

export { styles };
