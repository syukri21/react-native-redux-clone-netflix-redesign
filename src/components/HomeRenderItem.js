import React from 'react';
import { Image, TouchableOpacity } from 'react-native';
import { CardItem, Text, Button } from 'native-base';
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
		return {
			backgroundColor : bool ? '#7CB34288' : 'rgba(0,0,0,0.5)'
		};
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
					<CardItem cardBody style={styles.cardContent}>
						<Button
							full
							style={[
								styles.button,
								this.isWatched(data.id)
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
