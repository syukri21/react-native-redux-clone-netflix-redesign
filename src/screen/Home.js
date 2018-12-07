import React from 'react';
import { Image, View, TouchableOpacity } from 'react-native';
import Grid from 'react-native-grid-component';
import { Container, Content, CardItem, Text, Button } from 'native-base';
import { connect } from 'react-redux';
import { _ } from 'lodash';

import HeaderMod from '../components/HeaderMod';
import DrawerMod from '../components/DrawerMod';
import HomeRenderItem from '../components/HomeRenderItem';

import * as Animatable from 'react-native-animatable';

import { styles } from './home-style';

class Home extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			isOpen : false
		};
		this.navigation = props.navigation;
	}

	toggleDrawer() {
		this.setState({
			isOpen : true
		});
	}

	renderItem = (data, i) => {
		return <HomeRenderItem data={data} key={i} navigation={this.navigation} />;
	};

	render() {
		const { film } = this.props;
		return (
			<DrawerMod isOpen={this.state.isOpen} {...this.props}>
				<Container style={styles.wrapper}>
					<HeaderMod menu={true} toggleDrawer={this.toggleDrawer.bind(this)} profile>
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
	let user = state.users.find((user) => user.isLoged);
	let watchFilmId = state.watchListFilm.map((item) => item.id);
	return {
		film        : state.film,
		username    : user ? user.username : null,
		watchFilmId
	};
};

export default connect(mapStateToProps)(Home);
