import React from 'react';

import { FloatingAction } from 'react-native-floating-action';
import * as Animatable from 'react-native-animatable';
import LinearGradient from 'react-native-linear-gradient';
import { Icon, View } from 'native-base';
import { TouchableOpacity } from 'react-native';

class FloatButton extends React.Component {
	constructor(props) {
		super(props);
		this.navigation = props.navigation;
	}

	bounce = () => this.btn.bounce(300).then(({ finished }) => finished && this.navigation.navigate('Search'));
	render() {
		return (
			<Animatable.View
				animation="bounceInDown"
				duration={1000}
				easing="ease-in-out-sine"
				style={{
					position: 'absolute',
					bottom: 0,
					right: 0,
					width: 100,
					height: 100,
					backgroundColor: 'transparent'
				}}
				ref={(ref) => (this.btn = ref)}
			>
				<FloatingAction
					overlayColor="rgba(0,0,0,0.8)"
					color="#B7135C"
					showBackground={false}
					floatingIcon={
						<View>
							<LinearGradient
								colors={[
									'#B3155F',
									'#454DB0'
								]}
								style={{
									height: 80,
									position: 'absolute',
									top: 0,
									left: 0,
									bottom: 0,
									right: 0,
									transform: [
										{ translateY: -20 },
										{ translateX: -20 }
									],
									width: 80
								}}
								start={{
									x: 0,
									y: 0
								}}
								end={{
									x: 1,
									y: 0
								}}
							/>

							<Icon style={{ color: 'white' }} active name="add" />
						</View>
					}
					onPressMain={() => this.bounce()}
				/>
			</Animatable.View>
		);
	}
}

export default FloatButton;
