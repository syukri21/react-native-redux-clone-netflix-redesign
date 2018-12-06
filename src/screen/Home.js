import React from 'react';
import { Image, View, TouchableOpacity } from 'react-native';
import Grid from 'react-native-grid-component';
import { Container, Content, CardItem, Text, Button, Drawer } from 'native-base';
import { connect } from 'react-redux';

import HeaderMod from '../components/HeaderMod';
import DrawerMod from '../components/DrawerMod';

import * as Animatable from 'react-native-animatable';

import { styles } from './home-style';

class Home extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			isOpen: false
		};
		this.navigation = props.navigation;
	}

	toggleDrawer() {
		this.setState({
			isOpen: true
		});
	}

	renderItem(data, i) {
		return (
			<TouchableOpacity
				style={styles.item}
				key={i}
				onPress={() => this.navigation.navigate('Detail', { itemId: data.id })}
			>
				<Animatable.View  style={styles.item} animation="zoomIn" duration={1000}>
				<CardItem cardBody>
					<Image style={styles.itemImage} source={data.gambar} resizeMode="cover" />
				</CardItem>
				<CardItem cardBody style={styles.cardContent}>
					<Button
						full
						style={styles.button}
						onPress={() => this.navigation.navigate('Detail', { itemId: data.id })}
					>
						<Text style={styles.text}>{data.title}</Text>
					</Button>
				</CardItem>
				</Animatable.View>
			</TouchableOpacity>
		);
	}

	render() {
		const { film, username } = this.props;
		console.log(this.props);
		return (
			<DrawerMod isOpen={this.state.isOpen} {...this.props}>
				<Container style={styles.wrapper}>
					<HeaderMod menu={true} toggleDrawer={this.toggleDrawer.bind(this)} add   title={username} >
						Home
					</HeaderMod>
					<Content>
						<View>
							<Grid
								style={styles.list}
								{...this.props}
								renderItem={this.renderItem}
								data={film}
								itemsPerRow={2}
							/>
						</View>
					</Content>
				</Container>
			</DrawerMod>
		);
	}
}

const mapStateToProps = (state) => {
	user = state.users.find(user => user.isLoged);
	return({
		film: state.film,
		username : user ? user.username : null
	})
};

export default connect(mapStateToProps)(Home);
