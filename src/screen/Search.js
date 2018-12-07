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
	CardItem
} from 'native-base';
import { ListView, TouchableOpacity, Image } from 'react-native';

import { connect } from 'react-redux';
import { onSearchFilm } from '../actions/searchAction';
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

	renderItem = (item) => {
		return (
			<TouchableOpacity
				last
				style={{}}
				onPress={() => this.props.navigation.navigate('Detail', { itemId: item.id })}
				key={item.id}
			>
				<View style={{ flex: 1, margin: 0, padding: 0, flexDirection: 'row' }}>
					<CardItem style={{ flex: 2, padding: 0, backgroundColor: 'green' }} cardBody>
						<Image
							source={item.gambar}
							style={{ width: '100%', height: 100, flex: 1 }}
						/>
					</CardItem>
					<CardItem
						style={{
							flex            : 4,
							backgroundColor : '#222',
							borderRadius    : 0
						}}
					>
						<Left>
							<Text style={{ color: 'white' }}>{item.title}</Text>
						</Left>
					</CardItem>
				</View>
			</TouchableOpacity>
		);
	};

	handleAdd = (id) => () => {
		this.props.addWatchList(id);
		this.navigation.navigate('WatchList');
	};

	rightHiddenItem = (data) => (
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
						<Icon
							style={[
								styles.icon,
								styles.iconSearch
							]}
							name='md-search'
						/>
					</Item>
				</Header>
				<Content style={styles.content}>
					{this.props.searchListFilm.length !== 0 ? (
						<List
							renderRow={this.renderItem}
							rightOpenValue={-100}
							dataSource={this.state.ds.cloneWithRows(this.props.searchListFilm)}
							renderRightHiddenRow={this.rightHiddenItem}
						/>
					) : (
						<Body style={{ paddingTop: 40 }}>
							<Text style={{ color: 'white' }}>Cari Film yang anda suka!</Text>
						</Body>
					)}
				</Content>
			</Container>
		);
	}
}

const mapStateToProps = (state) => ({
	searchListFilm : state.searchListFilm,
	searchData     : state.searchData
});

const mapDispatchToProps = (dispatch) => ({
	onSearch     : (regex) => dispatch(onSearchFilm(regex)),
	addWatchList : (id) => dispatch(addWatchList(id))
});

export default connect(mapStateToProps, mapDispatchToProps)(Search);
