import React from 'react';
import { Container, Content, Card, CardItem, Button, Text } from 'native-base';
import { StyleSheet } from 'react-native';

import Logo from './Logo';

class Sidebar extends React.Component {
	render() {
		let opt1 = this.props.watchList ? 'Home' : 'WatchList';
		return (
			<Container style={styles.container}>
				<Content>
					<CardItem style={{ backgroundColor: 'black', justifyContent: 'center' }}>
						<Logo />
					</CardItem>
					<Button full style={styles.button} onPress={() => this.props.navigation.navigate(opt1)}>
						<Text>{opt1}</Text>
					</Button>
					<Button full style={styles.button} onPress={() => this.props.navigation.navigate('Login')}>
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
		backgroundColor: 'rgba(0,0,0,0.8)'
	},
	cardItem: {
		flex: 1,
		backgroundColor: 'rgba(0,0,0,0.8)'
	},
	button: {
		flex: 1,
		backgroundColor: '#B7135C'
	}
});

export default Sidebar;
