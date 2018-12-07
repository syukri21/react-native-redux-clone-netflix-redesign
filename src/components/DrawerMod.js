import React, { Component } from 'react';
import { StyleSheet } from 'react-native';
import Drawer from 'react-native-drawer';
import Sidebar from './Sidebar';

import { connect } from 'react-redux';
import { onCloseDraw, onOpenDraw } from '../actions/drawerAction';

class DrawerMod extends Component {
	render() {
		return (
			<Drawer
				content={<Sidebar {...this.props} />}
				tapToClose={true}
				openDrawerOffset={100}
				type='static'
				open={this.props.drawOpen}
			>
				{this.props.children}
			</Drawer>
		);
	}
}

const styles = StyleSheet.create({
	absolute : {
		position : 'absolute',
		top      : 0,
		left     : 0,
		bottom   : 0,
		right    : 0
	}
});

const mapStateToProps = (state) => {
	return {
		drawOpen : state.drawOpen
	};
};

const mapDispatchToProps = (dispatch) => ({
	onCloseDraw : () => dispatch(onCloseDraw()),
	onOpenDraw  : () => dispatch(onOpenDraw())
});

export default connect(mapStateToProps, mapDispatchToProps)(DrawerMod);
