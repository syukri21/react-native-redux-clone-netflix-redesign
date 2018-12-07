import React from 'react';
import { Header, Button, Icon, Text, Badge } from 'native-base';

import LinearGradient from 'react-native-linear-gradient';
import { View, Image } from 'react-native';
import { connect } from 'react-redux';

import { styles, linearGradientConfig, buttonConfig } from './headerModeStyle';

class HeaderMod extends React.Component {
	constructor(props) {
		super(props);
		this.user = this.props.user;
		this.navigation = props.navigation;
	}
	buttonMenu() {
		return (
			<Button
				{...buttonConfig}
				style={styles.buttonBack}
				onPress={this.props.toggleDrawer}
			>
				<Icon active name='md-menu' />
			</Button>
		);
	}

	goBack = () => this.props.navigation.goBack();

	buttonBack() {
		return (
			<Button {...buttonConfig} style={styles.buttonBack} onPress={this.goBack}>
				<Icon active name='md-arrow-back' />
			</Button>
		);
	}

	buttonProfile() {
		return (
			<Button {...buttonConfig} iconRight style={styles.buttonAdd}>
				<Text>{this.user.username || 'we'}</Text>
				<Image style={styles.imageProfil} source={this.user.image} />
			</Button>
		);
	}

	render() {
		return (
			<View style={styles.view}>
				<LinearGradient style={styles.linearGradient} {...linearGradientConfig} />
				<Header style={styles.header}>
					{this.props.menu ? this.buttonMenu() : this.buttonBack()}
					<Text style={styles.headerText}>{this.props.children}</Text>
					{this.props.profile && this.buttonProfile()}
				</Header>
			</View>
		);
	}
}

const mapStateToProps = (state) => {
	let user = state.users.find((user) => user.isLoged);

	return {
		user : {
			username : user ? user.username : null,
			image    : user ? user.image : null
		}
	};
};

export default connect(mapStateToProps)(HeaderMod);
