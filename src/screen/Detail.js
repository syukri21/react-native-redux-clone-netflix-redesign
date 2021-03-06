import React from 'react';
import { Container, Content, Text, Button, Icon, Card, CardItem, Body, View } from 'native-base';
import { Rating } from 'react-native-ratings';
import { Image } from 'react-native';

import { connect } from 'react-redux';
import { addWatchList } from '../actions/watchListAction';

import ButtonIconGroup from '../components/ButtonIconGroup';

import { styles, ratingCongig, heartConfig, iconAddConfig, topImageConfig } from './detail-style';

class Detail extends React.Component {
	state = {
		check : false
	};

	handleAdd = (id) => () => {
		this.props.addWatchList(id);
		alert('Selamat film di Bookmark :)');
	};

	render() {
		let data = this.props.film;
		return (
			<Container>
				<Content style={styles.content}>
					<View style={styles.wrapperImage}>
						<Image source={data.gambar} {...topImageConfig} />
						<ButtonIconGroup {...this.props} {...heartConfig} />
						<View style={styles.viewPlayButton}>
							<Button danger style={styles.playButton}>
								<Icon active name='play' />
							</Button>
						</View>
					</View>
					<View style={styles.viewButton2}>
						<Button transparent light>
							<Icon {...iconAddConfig} />
						</Button>
						<Button transparent danger onPress={this.handleAdd(data.id)}>
							<Icon active name='md-bookmark' style={styles.iconButton2} />
						</Button>
					</View>
					<Card>
						<CardItem>
							<Body>
								<View style={styles.warpTitle}>
									<Text style={styles.title}>{data.title}</Text>
								</View>
								<View style={styles.warpProduction}>
									<Text style={styles.textProduction}>
										Production by {data.produser}
									</Text>
								</View>
							</Body>
						</CardItem>
						<CardItem style={styles.warpRating}>
							<Rating {...ratingCongig} />
						</CardItem>
						<CardItem>
							<Text style={styles.textDescription}>{data.description}</Text>
						</CardItem>
						<CardItem style={styles.cardItemImage}>
							<Image source={data.gambar} style={styles.imageThmbnail} />
						</CardItem>
						<CardItem style={styles.cardItem}>
							<View style={styles.viewTanggalRilis}>
								<Text style={styles.textTanggalRilisLabelLeft}>Tanggal RIlis</Text>
								<Text style={styles.textTanggalRilis}>{data.tanggalRilis}</Text>
							</View>
							<View>
								<Text style={styles.textTanggalRilisLabelRight}>Sutradara</Text>
								<Text style={styles.textTanggalRilis}>{data.sutradara}</Text>
							</View>
						</CardItem>
					</Card>
				</Content>
			</Container>
		);
	}
}

const mapStateToProps = (state, ownProps) => {
	let id = ownProps.navigation.getParam('itemId', null);
	return {
		film : state.film.find((post) => post.id === id)
	};
};

const mapDispatchToProps = (dispatch) => () => ({
	addWatchList : (id) => dispatch(addWatchList(id))
});

export default connect(mapStateToProps, mapDispatchToProps)(Detail);
