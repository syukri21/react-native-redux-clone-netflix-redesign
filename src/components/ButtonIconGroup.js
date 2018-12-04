import React from 'react';
import { View } from 'react-native';
import { Button, Icon } from 'native-base';

class ButtonIconGroup extends React.Component {
	render() {
		const { styles, navigation, firstIcon, secondIcon } = this.props;
		return (
			<View style={styles.viewButton}>
				<Button transparent light onPress={() => navigation.goBack()}>
					<Icon active name={firstIcon} style={styles.iconButton} />
				</Button>
				<Button transparent danger>
					<Icon active name={secondIcon} style={styles.iconButton} />
				</Button>
			</View>
		);
	}
}

export default ButtonIconGroup;
