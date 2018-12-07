import { StyleSheet } from 'react-native';
const styles = StyleSheet.create({
	content      : {
		padding : 20
	},
	form         : {
		flex : 1
	},
	card         : {
		alignSelf       : 'center',
		backgroundColor : 'black',
		flex            : 1
	},
	// util
	bgBlack      : {
		backgroundColor : 'black',
		borderColor     : 'black'
	},
	float        : {
		transform : [
			{ translateY: -10 }
		],
		color     : 'white',
		fontSize  : 20
	},
	text         : {
		color : '#fff'
	},
	itemInput    : {
		height            : 50,
		color             : 'white',
		borderBottomColor : 'white',
		borderBottomWidth : 2
	},
	checkBoxItem : {
		justifyContent    : 'space-around',
		flexDirection     : 'row',
		marginTop         : 30,
		borderBottomWidth : 0,
		color             : 'white'
	},
	icon         : {
		color     : '#fff',
		transform : [
			{ translateX: -10 }
		]
	},
	input        : {
		color    : 'white',
		fontSize : 20
	},
	buttonSignUp : {
		borderRadius : 10,
		overflow     : 'hidden',
		height       : 60
	},
	absolute     : {
		position : 'absolute',
		height   : '100%',
		width    : '100%',
		top      : 80,
		left     : 0,
		right    : 0,
		bottom   : 0,
		flex     : 1
	},
	buttonSignIn : {
		borderRadius : 10,
		overflow     : 'hidden',
		height       : 60
	},
	viewCheckBox : {
		height         : 50,
		color          : 'white',
		justifyContent : 'space-around',
		flexDirection  : 'row',
		marginTop      : 30
	}
});

const linearGradientConfig = {
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

const buttonConfig = {
	disable  : true,
	full     : true,
	iconLeft : true,
	style    : {
		...styles.buttonSignUp
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
		'#3F51B5'
	],
	style  : {
		width    : '100%',
		height   : 70,
		position : 'absolute'
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

export {
	styles,
	linearGradientConfig,
	buttonConfig,
	buttomLinearGradientConfig,
	shadowOpt
};
