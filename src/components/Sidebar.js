import React from 'react';
import { Container, Content, CardItem, Button, Text } from 'native-base';
import { StyleSheet, findNodeHandle, TouchableOpacity } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {connect} from 'react-redux';


import {onLogout} from '../actions/usersAction';


import Logo from './Logo';
import BackgroundImage from './BackgroundImage';

class Sidebar extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			viewRef: null
		};

		this.navigation = props.navigation;
		this.closeDrawer = props.closeDrawer;
	}

	imageLoaded() {
		this.setState({
			viewRef: findNodeHandle(this.background)
		});
	}

	blurViewLoad = () => (
		<BlurView style={styles.absolute} blurType="dark" blurAmount={1} viewRef={this.state.viewRef} />
	);

	navigateTo(to) {
		this.closeDrawer();
		this.props.navigation.navigate(to);
	}

	logout(){
		this.props.onLogout()
		this.navigation.navigate('Login');

	}
	render() {
		let opt1 = this.props.watchList ? 'Home' : 'WatchList';
		return (
			<Container style={styles.container}>
				<BackgroundImage image={require('../assets/sidebar.jpg')}>
					<LinearGradient
						colors={[
							'#000000',
							'#00000066',
							'#000000'
						]}
						style={styles.absolute}
						start={{
							x: 0,
							y: 0
						}}
						end={{
							x: 0,
							y: 1
						}}
					/>
				</BackgroundImage>
				<Content>
					<CardItem style={{ backgroundColor: 'black', justifyContent: 'center' }}>
						<Logo />
					</CardItem>
					<TouchableOpacity
						onPress={() => this.navigateTo(opt1)}
						style={{ flex: 1, height: 60, width: '100%', alignItems: 'center', justifyContent: 'center' }}
					>
						<Text style={styles.textButton}>{opt1.toUpperCase()}</Text>
					</TouchableOpacity>
					<Button full style={styles.button} onPress={() => this.logout()}>
						<Text style={styles.textButton}>LOGOUT</Text>
					</Button>
				</Content>
			</Container>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: 'transparent'
	},
	cardItem: {
		flex: 1,
		backgroundColor: 'transparent'
	},
	button: {
		flex: 1,
		backgroundColor: 'transparent',
		height: 50,
		color: 'white'
	},
	textButton: {
		fontSize: 20,
		color: 'white'
	},
	absolute: {
		position: 'absolute',
		top: 0,
		left: 0,
		bottom: 0,
		right: 0
	}
});


const mapStateToProps = (state) => {
	let data = state.users.find(user => user.active);

	return({
		username : data ? data.username : null
	})
}


const mapDispatchToProps = (dispatch) => ({
	onLogout : () => dispatch(onLogout())
})
export default connect(mapStateToProps, mapDispatchToProps)(Sidebar);