import React from 'react';
import {
	Container,
	Content,
	Text,
	Header,
	Footer,
	Item,
	Icon,
	Input,
	Button,
	View,
	FooterTab,
	Left,
	Body,
	List,
	CardItem,
	Badge
} from 'native-base';
import { ListView, TouchableOpacity, Image } from 'react-native';
import { _ } from 'lodash';

import { connect } from 'react-redux';
import { onSearchFilm } from '../actions/searchAction';
import { onCloseDraw, onOpenDraw } from '../actions/drawerAction';
import { addWatchList } from '../actions/watchListAction';

// Styles
import { styles } from './search-style';
class Search extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			ds          : new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 }),
			placeholder : props.searchData
		};
		this.navigation = props.navigation;
	}

	changeScreen = (id) => () => {
		this.props.navigation.navigate('Detail', { id });
	};

	handleAdd = (id) => () => {
		this.props.onCloseDraw();
		this.props.addWatchList(id);
		this.navigation.navigate('WatchList');
	};

	renderItem = (item) => <RenderItemConnect item={item} navigation={this.props.navigation} />;

	renderItems = () =>
		this.props.searchListFilm.length !== 0 ? (
			<List
				renderRow={this.renderItem}
				rightOpenValue={-100}
				dataSource={this.state.ds.cloneWithRows(this.props.searchListFilm)}
				renderRightHiddenRow={this.renderRightHiddenItem}
			/>
		) : (
			<Body style={{ paddingTop: 40 }}>
				<Text style={{ color: 'white' }}>Cari Film yang anda suka!</Text>
			</Body>
		);

	renderRightHiddenItem = (data) => (
		<Button full success onPress={this.handleAdd(data.id)}>
			<Icon active name='add' />
		</Button>
	);

	render() {
		return (
			<Container>
				<Header style={styles.header} searchBar rounded>
					<Item style={styles.itemLeft}>
						<Input
							value={this.props.searchData}
							style={styles.inputSearch}
							onChangeText={this.props.onSearch}
							placeholder='Search'
						/>
						<Icon style={styles.iconSearch} name='md-search' />
					</Item>
				</Header>
				<Content style={styles.content}>{this.renderItems()}</Content>
			</Container>
		);
	}
}

class RenderItem extends React.Component {
	constructor(props) {
		super(props);
		this.navigation = this.props.navigation;
	}

	changeScreen = (id) => () => {
		this.navigation.navigate('Detail', { itemId: id });
	};

	badgeSign = () => (
		<Badge style={styles.badgeSign}>
			<Text>Added</Text>
		</Badge>
	);
	render() {
		const { item } = this.props;
		const bool = _.includes(this.props.watchListId, item.id);
		return (
			<TouchableOpacity last onPress={this.changeScreen(item.id)} key={item.id}>
				<View style={styles.viewItemSearch}>
					<CardItem style={styles.cardImageItemSearch} cardBody>
						<Image source={item.gambar} style={styles.imageItemSearch} />
					</CardItem>

					<CardItem
						style={[
							styles.titleItemSearch,
							{
								backgroundColor : bool ? '#222' : '#22222288'
							}
						]}
					>
						<Left>
							<Text style={styles.white}>{item.title}</Text>
						</Left>
					</CardItem>
					{bool && this.badgeSign()}
				</View>
			</TouchableOpacity>
		);
	}
}

const mStP = (state) => ({
	watchListId : state.watchListFilm.map((item) => item.id)
});

const mapStateToProps = (state) => ({
	searchListFilm : state.searchListFilm,
	searchData     : state.searchData
});

const RenderItemConnect = connect(mStP)(RenderItem);

const mapDispatchToProps = (dispatch) => ({
	onSearch     : (regex) => dispatch(onSearchFilm(regex)),
	addWatchList : (id) => dispatch(addWatchList(id)),
	onCloseDraw  : () => dispatch(onCloseDraw())
});

export default connect(mapStateToProps, mapDispatchToProps)(Search);
