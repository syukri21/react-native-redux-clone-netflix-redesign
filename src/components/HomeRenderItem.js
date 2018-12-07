import React from 'react';
import { Image, TouchableOpacity } from 'react-native';
import { CardItem, Text, Button, Icon, Badge } from 'native-base';
import { connect } from 'react-redux';
import { _ } from 'lodash';

import * as Animatable from 'react-native-animatable';

import { styles } from '../screen/home-style';

class HomeRenderItem extends React.Component {
	constructor(props) {
		super(props);
		this.navigation = props.navigation;
		this.watchFilmId = props.watchFilmId;
	}

	isWatched(id) {
		const bool = _.includes(this.props.watchFilmId, id);
		if (bool)
			return (
				<CardItem cardBody style={styles.cardContent2}>
					<Badge style={{ backgroundColor: '#526E3188' }}>
						<Text>in WatchList</Text>
					</Badge>
				</CardItem>
			);

		return null;
	}

	changeScreen = (to, id) => () => this.navigation.navigate(to, { itemId: id });

	render() {
		const { data } = this.props;
		return (
			<TouchableOpacity style={styles.item} onPress={this.changeScreen('Detail', data.id)}>
				<Animatable.View style={styles.item} animation='zoomIn' duration={1000}>
					<CardItem cardBody>
						<Image style={styles.itemImage} source={data.gambar} resizeMode='cover' />
					</CardItem>
					{this.isWatched(data.id)}
					<CardItem cardBody style={styles.cardContent}>
						<Button
							full
							style={[
								styles.button,
								{
									backgroundColor : _.includes(this.props.watchFilmId, data.id)
										? '#526E3188'
										: '#05030788'
								}
							]}
						>
							<Text style={styles.text}>{data.title}</Text>
						</Button>
					</CardItem>
				</Animatable.View>
			</TouchableOpacity>
		);
	}
}
const mapStateToProps = (state) => {
	let watchFilmId = state.watchListFilm.map((item) => item.id);
	return {
		watchFilmId
	};
};

export default connect(mapStateToProps)(HomeRenderItem);
