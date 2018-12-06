import React from 'react';
import {
	Container,
	Header,
	Content,
	SwipeRow,
	View,
	Text,
	Icon,
	Button,
	List,
	CardItem,
	Card,
	Left,
	Body,
	Footer,
	FooterTab
} from 'native-base';
import { ListView, Image, TouchableOpacity } from 'react-native';
import { connect } from 'react-redux';

import { deleteWatchList } from '../actions/watchListAction';
import HeaderMod from '../components/HeaderMod';
import DrawerMod from '../components/DrawerMod';

import * as Animatable from 'react-native-animatable';
import FloatButton from '../components/FloatButton';

class WatchList extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			isOpen: false,
			listViewData: props.watchListFilm,
			ds: new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 })
		};
		this.navigation = props.navigation;
	}

	openDrawer() {
		this.setState({
			isOpen: true
		});
	}

	closeDrawer = () => this.setState({
		isOpen: false
	})

	renderItem(item) {
		return (
			<TouchableOpacity
				last
				style={{backgroundColor: 'black'}}
				onPress={() => this.props.navigation.navigate('Detail', { itemId: item.id })}
				key={item.id}
			>
				<Animatable.View 
					style={{ flex: 1, margin: 0, padding: 0, flexDirection: 'row', backgroundColor:'#333333' }} 
					animation='slideInRight' 
					duration={500} 
					ref={(ref) => this.view = ref} 
				>
					<CardItem style={{ flex: 2, padding: 0, backgroundColor: 'green' }} cardBody>
						<Image source={item.gambar} style={{ width: '100%', height: 120, flex: 1 }} />
					</CardItem>
					<CardItem
						style={{
							flex: 3,
							backgroundColor: 'transparent',
							borderRadius: 0
						}}
					>
						<Left>
							<Text style={{ color: 'white' }}>{item.title}</Text>
						</Left>
					</CardItem>
				</Animatable.View>
			</TouchableOpacity>
		);
	}

	handleDelete(secId, rowId, rowMap, id) {
		this.props.deleteWatchList(id)
		
		rowMap[`${secId}${rowId}`].props.closeRow();
		const newData = [
			...this.state.listViewData
		];
		newData.splice(rowId, 1);
		this.setState({ listViewData: newData });
	}

	

	render() {
		const ds = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 });
		return (
			<DrawerMod isOpen={this.state.isOpen} watchList {...this.props}>
				<Container style={{ backgroundColor: 'transparent' }}>
					<HeaderMod {...this.props} menu={true} toggleDrawer={this.openDrawer.bind(this)} add title={this.props.username} >
						My Watchlist
					</HeaderMod>
					<Content style={{ backgroundColor: 'black' }}>
						<List
							renderRow={(data) => this.renderItem(data)}
							rightOpenValue={-100}
							dataSource={this.state.ds.cloneWithRows(this.props.watchListFilm)}
							renderRightHiddenRow={(data, secId, rowId, rowMap) => (
								<Button full danger onPress={() => this.handleDelete(secId, rowId, rowMap, data.id)}>
									<Icon active name="trash" />
								</Button>
							)}

							style={{backgroundColor:'transparent'}}
						/>
					</Content>

					<FloatButton {...this.props} closeDrawer = {this.closeDrawer.bind(this)} />
				</Container>
			</DrawerMod>
		);
	}
}

const mapStateToProps = (state) => {

	let data = state.users.find(user => user.isLoged);


	return({
		watchListFilm: state.watchListFilm,
		username :  data ? data.username : null,
	});
}

const mapDispatchToProps = (dispatch) => ({
	deleteWatchList: (id) => dispatch(deleteWatchList(id))
});

export default connect(mapStateToProps, mapDispatchToProps)(WatchList);
