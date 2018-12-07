import { StyleSheet } from 'react-native';
const styles = StyleSheet.create({
	header         : {
		height          : 80,
		backgroundColor : 'transparent'
	},
	buttonBack     : {
		transform : [
			{ translateX: -20 }
		]
	},
	headerText     : {
		color     : '#fff',
		alignSelf : 'center',
		flex      : 1
	},
	buttonAdd      : {
		justifyContent : 'center',
		transform      : [
			{ translateX: 15 }
		]
	},
	absolute       : {
		position : 'absolute',
		top      : 80,
		left     : 0,
		right    : 0,
		bottom   : 0,
		flex     : 1
	},
	imageProfil    : {
		height       : 50,
		width        : 50,
		borderRadius : 40,
		marginRight  : 10
	},
	linearGradient : {
		height   : 80,
		position : 'absolute',
		top      : 0,
		left     : 0,
		width    : '100%'
	},
	view           : {
		position : 'relative',
		top      : 0,
		left     : 0,
		zIndex   : 1000
	}
});

const linearGradientConfig = {
	start  : {
		x : 0,
		y : 0
	},
	end    : {
		x : 1,
		y : 0
	},
	colors : [
		'#B3155F',
		'#454DB0'
	]
};

const buttonConfig = {
	transparent : true,
	light       : true,
	iconLeft    : true
};

export { styles, linearGradientConfig, buttonConfig };
