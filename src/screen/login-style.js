import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
	// Structure
	container        : {
		flex            : 1,
		backgroundColor : 'black'
	},
	contentUp        : {
		flex           : 0.8,
		justifyContent : 'center',
		alignItems     : 'center',
		flexDirection  : 'row'
	},
	contentDown      : {
		flex : 4
	},
	footer           : {
		backgroundColor : 'transparent'
	},
	backgroundVideo  : {
		position : 'absolute',
		top      : 0,
		left     : 0,
		bottom   : 0,
		right    : 0
	},
	// Components
	title            : {
		fontSize   : 30,
		color      : '#3F51B5',
		fontWeight : 'bold'
	},
	form             : {
		padding : 10
	},
	label            : {
		fontSize   : 20,
		lineHeight : 16,
		color      : 'white'
	},
	icon             : {
		transform : [
			{ translateX: -10 }
		],
		color     : 'white'
	},
	buttonGroup      : {
		padding : 10
	},
	buttonForgotPass : {
		color            : '#3F51B5',
		fontSize         : 20,
		fontWeight       : '200',
		textShadowColor  : 'black',
		textShadowOffset : { width: 1, height: 1 },
		textShadowRadius : 10,
		width            : 200
	},
	buttonSignIn     : {
		borderRadius : 10,
		overflow     : 'hidden',
		height       : 55
	},
	textSignIn       : {
		fontSize : 16
	},
	buttonSignUp     : {
		color     : 'white',
		fontSize  : 15,
		marginTop : 10
	},
	input            : {
		color    : 'white',
		fontSize : 20
	},
	item             : {
		borderBottomColor : 'white',
		borderBottomWidth : 5
	},

	// Color
	red              : {
		color : '#B7135C'
	},
	absolute         : {
		position : 'absolute',
		top      : 0,
		left     : 0,
		bottom   : 0,
		right    : 0
	},
	iconVideos       : {
		transform  : [
			{ translateX: -10 }
		],
		color      : 'white',
		fontSize   : 30,
		color      : '#3F51B5',
		fontWeight : 'bold',
		color      : '#B7135C'
	},
	viewForgotPass   : {
		padding      : 10,
		marginBottom : 20
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
	style  : {
		...styles.absolute
	}
};

const buttonLoginConfig = {
	primary : true,
	full    : true,
	style   : {
		...styles.buttonSignIn
	}
};

const shadowOpt = {
	width   : 350,
	height  : 70,
	color   : '#000',
	border  : 10,
	radius  : 15,
	opacity : 0.3,
	x       : -5,
	y       : -4,
	style   : {
		flex         : 1,
		width        : 340,
		alignSelf    : 'center',
		borderRadius : 10,
		marginBottom : 100
	}
};

const buttomLinearGradientConfig = {
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
	style  : {
		...styles.absolute
	}
};

export {
	styles,
	buttomLinearGradientConfig,
	shadowOpt,
	backgroundLinearGradientConfig,
	buttonLoginConfig
};
