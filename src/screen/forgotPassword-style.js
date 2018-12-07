import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
	// Structure

	content     : {
		backgroundColor : 'transparent',
		height          : '100%',
		paddingTop      : 80
	},
	contentWrap : {
		height         : 400,
		justifyContent : 'center',
		padding        : 20
	},
	footer      : {
		backgroundColor : 'transparent',
		paddingLeft     : 20,
		paddingRight    : 20,
		height          : 160,
		alignItems      : 'center'
	},
	// Components
	signUp      : {
		flexDirection  : 'row',
		justifyContent : 'flex-end',
		alignItems     : 'center',
		transform      : [
			{ translateY: -100 }
		]
	},
	text        : {
		color        : '#fff',
		textAlign    : 'center',
		marginBottom : 10,
		fontSize     : 18
	},
	footerText  : {
		textAlign : 'center',
		color     : '#fff',
		fontSize  : 14
	},
	icon        : {
		color : 'white'
	},
	input       : {
		color : '#fff'
	},
	newUser     : {
		color : '#474DB0'
	},
	// color
	bgBlack     : {
		backgroundColor : 'black'
	},
	childCenter : {
		alignSelf : 'center'
	},
	mt10        : {
		marginTop : 10
	},
	p0          : {
		padding : 0
	},
	absolute    : {
		position : 'absolute',
		top      : 0,
		left     : 0,
		bottom   : 0,
		right    : 0
	},
	helpText    : {
		color        : '#fff',
		textAlign    : 'center',
		marginBottom : 10,
		fontSize     : 18,
		marginTop    : 10
	},
	loginButton : {
		marginTop    : 10,
		borderRadius : 10,
		marginTop    : 50,
		overflow     : 'hidden',
		height       : 55
	},
	viewNewUser : {
		flexDirection  : 'row',
		justifyContent : 'flex-end',
		alignItems     : 'center',
		transform      : [
			{ translateY: -100 }
		],
		marginTop      : 10
	}
});

const backgroundLinearGradientConfig = {
	colors : [
		'#000000',
		'#00000077',
		'#ffffff11',
		'#00000077',
		'#000000'
	],
	start  : {
		x : 0,
		y : 1
	},
	end    : {
		x : 0,
		y : 0
	},
	style  : styles.absolute
};

const buttonLinearGradientConfig = {
	start  : {
		x : 0,
		y : 1
	},
	end    : {
		x : 1,
		y : 0
	},
	colors : [
		'#B7135C',
		'#4050B4'
	],
	style  : styles.absolute
};

const shadowOpt = {
	width   : 350,
	height  : 70,
	color   : '#000',
	border  : 10,
	radius  : 15,
	opacity : 0.3,
	x       : -5,
	y       : 42,
	style   : {
		flex         : 1,
		width        : 340,
		alignSelf    : 'center',
		borderRadius : 10
	}
};

const signUpConfig = {
	transparent : true,
	light       : true,
	small       : true
};

export {
	styles,
	signUpConfig,
	shadowOpt,
	backgroundLinearGradientConfig,
	buttonLinearGradientConfig
};
