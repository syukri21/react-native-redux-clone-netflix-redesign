import React from 'react';

import { FloatingAction } from 'react-native-floating-action';
import * as Animatable from 'react-native-animatable';
import LinearGradient from 'react-native-linear-gradient';
import { Icon, View } from 'native-base';
import { StyleSheet } from 'react-native';

class FloatButton extends React.Component {
	constructor(props) {
		super(props);
		this.navigation = props.navigation;
		this.closeDrawer = props.closeDrawer;
	}

	bounce = () =>
		this.btn
			.bounce(200)
			.then(
				({ finished }) =>
					finished && this.navigation.navigate('Search') && this.closeDrawer()
			);

	render() {
		return (
			<Animatable.View
				animation='bounceInDown'
				duration={1000}
				easing='ease-in-out-sine'
				style={styles.animatedView}
				ref={(ref) => (this.btn = ref)}
			>
				<FloatingAction
					overlayColor='rgba(0,0,0,0.8)'
					color='#B7135C'
					showBackground={false}
					floatingIcon={
						<View>
							<LinearGradient {...linearGradientConfig} />
							<Icon style={{ color: 'white' }} active name='add' />
						</View>
					}
					onPressMain={this.bounce}
				/>
			</Animatable.View>
		);
	}
}

const styles = StyleSheet.create({
	animatedView : {
		position        : 'absolute',
		bottom          : 0,
		right           : 0,
		width           : 100,
		height          : 100,
		backgroundColor : 'transparent'
	}
});

const linearGradientConfig = {
	style  : {
		height    : 80,
		position  : 'absolute',
		top       : 0,
		left      : 0,
		bottom    : 0,
		right     : 0,
		transform : [
			{ translateY: -20 },
			{ translateX: -20 }
		],
		width     : 80
	},
	colors : [
		'#B3155F',
		'#454DB0'
	],
	start  : {
		x : 0,
		y : 0
	},
	end    : {
		x : 1,
		y : 0
	}
};

export default FloatButton;
