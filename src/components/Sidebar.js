import React from 'react';
import { Container, Content, CardItem, Button, Text } from 'native-base';
import { StyleSheet, findNodeHandle } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
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
					<Button full style={styles.button} onPress={() => this.navigateTo(opt1)}>
						<Text>{opt1}</Text>
					</Button>
					<Button full style={styles.button} onPress={() => this.navigateTo('Login')}>
						<Text>LOGOUT</Text>
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
		backgroundColor: '#B7135C'
	},
	absolute: {
		position: 'absolute',
		top: 0,
		left: 0,
		bottom: 0,
		right: 0
	}
});

export default Sidebar;
