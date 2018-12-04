import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Icon, Text } from 'native-base';

class Logo extends React.Component {
	render() {
		return (
			<View style={styles.contentUp}>
				<Icon style={[ styles.icon ]} active name="play" />
				<Text style={styles.title}>VIDEOS</Text>
			</View>
		);
	}
}

const styles = StyleSheet.create({
	contentUp: {
		height: 100,
		justifyContent: 'center',
		alignItems: 'center',
		flexDirection: 'row'
	},
	title: {
		fontSize: 30,
		color: '#2A90ED'
	},
	icon: {
		color: '#B7135C',
		transform: [ { translateX: -10 } ],
		fontSize: 30
	}
});

export default Logo;
