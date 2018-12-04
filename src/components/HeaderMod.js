import React from 'react';
import { Header, Button, Icon, Text } from 'native-base';

import { StyleSheet, View } from 'react-native';

class HeaderMod extends React.Component {
	buttonMenu() {
		return (
			<Button transparent light style={styles.buttonBack} iconLeft onPress={() => this.props.toggleDrawer()}>
				<Icon active name="md-menu" />
			</Button>
		);
	}

	buttonBack() {
		return (
			<Button transparent light style={styles.buttonBack} iconLeft onPress={() => this.props.navigation.goBack()}>
				<Icon active name="md-arrow-back" />
			</Button>
		);
	}

	buttonAdd() {
		return (
			<Button transparent light iconRight style={styles.buttonAdd}>
				<Icon active name="md-add-circle" style={{ color: '#2A90ED' }} />
			</Button>
		);
	}

	render() {
		return (
			<View>
				<Header style={styles.header}>
					{this.props.menu ? this.buttonMenu() : this.buttonBack()}
					<Text style={styles.headerText}>{this.props.children}</Text>
					{this.props.add && this.buttonAdd()}
				</Header>
			</View>
		);
	}
}

const styles = StyleSheet.create({
	header: {
		backgroundColor: '#000000',
		borderBottomWidth: 2,
		borderBottomColor: '#410D0C'
	},
	buttonBack: {
		transform: [
			{ translateX: -20 }
		]
	},
	headerText: {
		color: '#fff',
		alignSelf: 'center',
		flex: 1
	},
	buttonAdd: {
		justifyContent: 'center',
		transform: [
			{ translateX: 15 }
		]
	}
});
export default HeaderMod;
