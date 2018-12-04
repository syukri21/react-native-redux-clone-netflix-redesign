import React from 'react';
import { Image, View, TouchableOpacity } from 'react-native';
import Grid from 'react-native-grid-component';
import { Container, Content, CardItem, Text, Button, Drawer } from 'native-base';
import { _ } from 'lodash';
import { connect } from 'react-redux';

import HeaderMod from '../components/HeaderMod';
import DrawerMod from '../components/DrawerMod';

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
				on
			>
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
			</TouchableOpacity>
		);
	}

	render() {
		const { film } = this.props;
		return (
			<DrawerMod isOpen={this.state.isOpen} {...this.props}>
				<Container style={styles.wrapper}>
					<HeaderMod menu={true} toggleDrawer={this.toggleDrawer.bind(this)}>
						Home
					</HeaderMod>
					<Content>
						<View>
							<Grid
								{...this.props}
								style={styles.list}
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

const mapStateToProps = (state) => ({
	film: state.film
});

export default connect(mapStateToProps)(Home);
