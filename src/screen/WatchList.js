import React from 'react';
import { Container, Content, Text, Icon, Button, List, CardItem, Left } from 'native-base';
import { ListView, Image, TouchableOpacity } from 'react-native';
import { connect } from 'react-redux';
import * as Animatable from 'react-native-animatable';
import FloatButton from '../components/FloatButton';

import { deleteWatchList } from '../actions/watchListAction';
import HeaderMod from '../components/HeaderMod';
import DrawerMod from '../components/DrawerMod';

import { styles } from './watchlist-style';

class WatchList extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			isOpen       : false,
			listViewData : props.watchListFilm,
			ds           : new ListView.DataSource({
				rowHasChanged : (r1, r2) => r1 !== r2
			})
		};
		this.navigation = props.navigation;
	}

	openDrawer = () => {
		this.setState({
			isOpen : true
		});
	};

	closeDrawer = () =>
		this.setState({
			isOpen : false
		});

	changeScreen = (to, itemId) => () =>
		this.props.navigation.navigate(to, {
			itemId
		});

	renderItem = (item) => {
		return (
			<TouchableOpacity
				last
				style={styles.black}
				onPress={this.changeScreen('Detail', item.id)}
				key={item.id}
			>
				<Animatable.View
					style={styles.animatedView}
					animation='slideInRight'
					duration={500}
					ref={(ref) => (this.view = ref)}
				>
					<CardItem style={styles.cardItem} cardBody>
						<Image source={item.gambar} style={styles.image} />
					</CardItem>
					<CardItem style={styles.cardItem}>
						<Left>
							<Text style={styles.text}>{item.title}</Text>
						</Left>
					</CardItem>
				</Animatable.View>
			</TouchableOpacity>
		);
	};

	handleDelete = (secId, rowId, rowMap, id) => () => {
		this.props.deleteWatchList(id);
		rowMap[`${secId}${rowId}`].props.closeRow();
		const newData = [
			...this.state.listViewData
		];
		newData.splice(rowId, 1);
		this.setState({ listViewData: newData });
	};

	renderRightHiddenRow = (data, secId, rowId, rowMap) => (
		<Button full danger onPress={this.handleDelete(secId, rowId, rowMap, data.id)}>
			<Icon active name='trash' />
		</Button>
	);

	render() {
		return (
			<DrawerMod isOpen={this.state.isOpen} watchList {...this.props}>
				<Container>
					<HeaderMod {...this.props} menu toggleDrawer={this.openDrawer} profile>
						My Watchlist
					</HeaderMod>
					<Content style={styles.black}>
						<List
							renderRow={this.renderItem}
							rightOpenValue={-100}
							dataSource={this.state.ds.cloneWithRows(this.props.watchListFilm)}
							renderRightHiddenRow={this.renderRightHiddenRow}
							style={styles.transparent}
						/>
					</Content>
					<FloatButton {...this.props} closeDrawer={this.closeDrawer} />
				</Container>
			</DrawerMod>
		);
	}
}

const mapStateToProps = (state) => {
	let data = state.users.find((user) => user.isLoged);
	return {
		watchListFilm : state.watchListFilm,
		username      : data ? data.username : null
	};
};

const mapDispatchToProps = (dispatch) => ({
	deleteWatchList : (id) => dispatch(deleteWatchList(id))
});

export default connect(mapStateToProps, mapDispatchToProps)(WatchList);
