import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
	wrapper      : {
		backgroundColor : 'black',
		flex            : 1
	},
	button       : {
		flex            : 1,
		height          : 60,
		backgroundColor : 'rgba(0,0,0,0.5)'
	},
	text         : {
		textAlign : 'center'
	},
	cardContent  : {
		flex            : 1,
		position        : 'absolute',
		bottom          : 0,
		left            : 0,
		backgroundColor : 'rgba(0,0,0,0.5)'
	},
	cardContent2 : {
		flex            : 1,
		position        : 'absolute',
		top             : 10,
		right           : 0,
		backgroundColor : 'transparent',
		padding         : 10
	},
	item         : {
		flex         : 1,
		overflow     : 'hidden',
		position     : 'relative',
		margin       : 2,
		marginBottom : 0,
		borderRadius : 2
	},
	itemImage    : {
		height : 250,
		width  : '100%'
	},
	list         : {
		flex : 1
	}
});

export { styles };
