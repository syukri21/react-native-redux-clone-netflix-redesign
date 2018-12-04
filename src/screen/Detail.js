import React from 'react';
import { Container, Content, Text, Button, Icon, Card, CardItem, Body, View, Image } from 'native-base';
import { Rating } from 'react-native-ratings';

// redux
import { connect } from 'react-redux';
import { addWatchList } from '../actions/watchListAction';

// components
import ButtonIconGroup from '../components/ButtonIconGroup';

// styles
import { styles } from './detail-style';

class Detail extends React.Component {
	handleAdd(id) {
		this.props.addWatchList(id);
		alert('Selamat film di Bookmark :)');
	}
	render() {
		let data = this.props.film;
		return (
			<Container>
				<Content style={styles.content}>
					<View style={styles.wrapperImage}>
						<Image source={data.gambar} style={styles.image} resizeMode={'cover'} />
						<ButtonIconGroup
							{...this.props}
							styles={styleButtonGroup1}
							firstIcon="md-arrow-round-back"
							secondIcon="heart"
						/>
						<View style={styles.viewPlayButton}>
							<Button danger style={styles.playButton} onPress={() => alert('play')}>
								<Icon active name="play" />
							</Button>
						</View>
					</View>

					<View style={styleButtonGroup2.viewButton}>
						<Button transparent light onPress={() => navigation.goBack()}>
							<Icon active name="md-add-circle" style={styleButtonGroup2.iconButton} />
						</Button>
						<Button transparent danger onPress={() => this.handleAdd(data.id)}>
							<Icon active name="md-bookmark" style={styleButtonGroup2.iconButton} />
						</Button>
					</View>
					<Card>
						<CardItem>
							<Body>
								<View style={styles.warpTitle}>
									<Text style={styles.title}>{data.title}</Text>
								</View>
								<View style={styles.warpProduction}>
									<Text style={styles.textProduction}>Production by {data.produser}</Text>
								</View>
							</Body>
						</CardItem>
						<CardItem style={styles.warpRating}>
							<Rating
								type="heart"
								ratingCount={5}
								imageSize={30}
								showRating
								onFinishRating={() => ''}
								style={{}}
							/>
						</CardItem>
						<CardItem>
							<Text style={styles.textDescription}>{data.description}</Text>
						</CardItem>
						<CardItem style={styles.cardItem}>
							<View>
								<Text style={styles.textTanggalRilisLabel}>Tanggal Rilis</Text>
								<Text style={styles.textTanggalRilis}>{data.tanggalRilis}</Text>
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
		film: state.film.find((post) => post.id === id)
	};
};

const mapDispatchToProps = (dispatch) => (id) => ({
	addWatchList: (id) => dispatch(addWatchList(id))
});

export default connect(mapStateToProps, mapDispatchToProps)(Detail);
