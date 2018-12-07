import React from 'react';
import { Header, Button, Icon, Text, Badge } from 'native-base';

import LinearGradient from 'react-native-linear-gradient';
import { View, Image } from 'react-native';
import { connect } from 'react-redux';

import { styles } from './headerModeStyle';

class HeaderMod extends React.Component {
	constructor(props) {
		super(props);
		this.user = this.props.user;
	}
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

	buttonProfile() {
		return (
			<Button transparent light iconRight style={styles.buttonAdd}>
				<Text>{this.user.username}</Text>
				<Image style={{ height: 50, width: 50, borderRadius: 40, marginRight: 10 }} source={this.user.image} />
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
					{this.props.add && this.buttonProfile()}
				</Header>
			</View>
		);
	}
}

const mapStateToProps = (state) => {
	let user = state.users.find((user) => user.isLoged);
	return {
		user: {
			username: user ? user.username : null,
			image: user ? user.image : null
		}
	};
};

export default connect(mapStateToProps)(HeaderMod);
