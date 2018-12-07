import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
	header              : {
		backgroundColor : 'black',
		padding         : 0,
		height          : 70
	},
	icon                : {
		color    : 'black',
		fontSize : 40,
		position : 'absolute',
		top      : 0,
		right    : 0,
		width    : 50
	},
	text                : {
		color    : 'white',
		fontSize : 16
	},
	itemLeft            : {
		backgroundColor : 'black',
		flex            : 3
	},
	itemRight           : {
		backgroundColor : 'black',
		flex            : 1,
		alignItems      : 'center',
		justifyContent  : 'center',
		padding         : 0
	},
	inputSearch         : {
		width           : '100%',
		backgroundColor : '#dfdfdf',
		borderRadius    : 20,
		paddingLeft     : 60
	},
	button              : {
		height : '100%'
	},
	content             : {
		backgroundColor : '#1E1E1E'
	},
	buttonBack          : {
		flexDirection : 'row',
		height        : '100%',
		borderRadius  : 0
	},
	iconSearch          : {
		color    : 'black',
		fontSize : 40,
		position : 'absolute',
		top      : 0,
		right    : 0,
		width    : 50,
		left     : 0
	},
	titleItemSearch     : {
		flex            : 4,
		backgroundColor : '#222',
		borderRadius    : 0
	},
	viewItemSearch      : {
		flex          : 1,
		margin        : 0,
		padding       : 0,
		flexDirection : 'row'
	},
	cardImageItemSearch : {
		flex            : 2,
		padding         : 0,
		backgroundColor : 'green'
	},
	imageItemSearch     : {
		width  : '100%',
		height : 100,
		flex   : 1
	},
	white               : {
		color : 'white'
	}
});

export { styles };
