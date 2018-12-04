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
	Body
} from 'native-base';

import { connect } from 'react-redux';
import { onSearchFilm } from '../actions/searchAction';

// Styles
import { styles } from './search-style';
class Search extends React.Component {
	render() {
		return (
			<Container>
				<Header style={styles.header} searchBar rounded>
					<Item style={styles.itemLeft}>
						<Input
							style={styles.inputSearch}
							placeholder="Search"
							onChangeText={(e) => this.props.onSearch(e)}
						/>
						<Icon
							style={[
								styles.icon,
								styles.iconSearch
							]}
							name="md-search"
						/>
					</Item>
				</Header>
				<Content style={styles.content}>
					{this.props.searchListFilm.map((item, key) => (
						<Text key={key} style={{ color: 'white' }}>
							{item.title}
						</Text>
					))}
				</Content>
				<Footer>
					<FooterTab>
						<Button dark style={styles.buttonBack} onPress={() => this.props.navigation.goBack()} iconLeft>
							<Text style={styles.text}>Back</Text>
						</Button>
					</FooterTab>
				</Footer>
			</Container>
		);
	}
}

const mapStateToProps = (state) => ({
	searchListFilm: state.searchListFilm
});

const mapDispatchToProps = (dispatch) => ({
	onSearch: (regex) => dispatch(onSearchFilm(regex))
});

export default connect(mapStateToProps, mapDispatchToProps)(Search);
