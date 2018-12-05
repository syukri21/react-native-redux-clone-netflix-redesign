import React from 'react';
import { View, Image, StyleSheet, findNodeHandle } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { BoxShadow } from 'react-native-shadow';
import { BlurView } from 'react-native-blur';

class BackgroundImage extends React.Component {
	state = {
		viewRef: null
	};

	imageLoaded() {
		this.setState({
			viewRef: findNodeHandle(this.background)
		});
	}

	blurViewLoad = () => (
		<BlurView style={styles.absolute} blurType="dark" blurAmount={1} viewRef={this.state.viewRef} />
	);
	render() {
		return (
			<View style={styles.absolute}>
				<Image
					source={this.props.image}
					style={styles.imageAbsolute}
					ref={(ref) => (this.background = ref)}
					onLoadEnd={this.imageLoaded.bind(this)}
				/>

				{this.props.blur && this.state.viewRef && this.blurViewLoad()}

				{this.props.children}
			</View>
		);
	}
}

const styles = StyleSheet.create({
	absolute: {
		position: 'absolute',
		top: 0,
		left: 0,
		bottom: 0,
		right: 0
	},
	imageAbsolute: {
		position: 'absolute',
		width: '100%',
		height: '100%'
	}
});

export default BackgroundImage;
