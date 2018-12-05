import React from 'react';
import { Header, Button, Icon, Text } from 'native-base';
import LinearGradient from 'react-native-linear-gradient';

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
			<Button
				transparent
				light
				iconRight
				style={styles.buttonAdd}
				onPress={() => this.props.navigation.navigate('Search')}
			>
				<Icon active name="md-add-circle" style={{ color: '#2A90ED', fontSize: 40 }} />
			</Button>
		);
	}

	render() {
		return (
			<View style={{ position: 'relative', top: 0, left: 0, zIndex: 1000 }}>
				<LinearGradient
					colors={[
						'#020203',
						'#020203'
					]}
					style={{
						height: 80,
						position: 'absolute',
						top: 0,
						left: 0,
						width: '100%'
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
		height: 80,
		backgroundColor: 'transparent'
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
	},
	absolute: {
		position: 'absolute',
		top: 80,
		left: 0,
		right: 0,
		bottom: 0,
		flex: 1
	}
});
export default HeaderMod;
