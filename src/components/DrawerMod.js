import React, { Component } from 'react';
import { StyleSheet } from 'react-native';
import Drawer from 'react-native-drawer';
import Sidebar from './Sidebar';

class DrawerMod extends Component {
	closeDrawer() {
		this.drawer.close();
	}

	openDrawer() {
		this.drawer.open();
	}

	componentWillReceiveProps(nextProps) {
		nextProps.isOpen && this.openDrawer();
	}

	render() {
		return (
			<Drawer
				ref={(ref) => {
					this.drawer = ref;
				}}
				content={<Sidebar {...this.props} />}
				tapToClose={true}
				openDrawerOffset={100}
				type="static"
				tweenHandler={Drawer.tweenPresets.parallax}
			>
				{this.props.children}
			</Drawer>
		);
	}
}

const styles = StyleSheet.create({
	absolute: {
		position: 'absolute',
		top: 0,
		left: 0,
		bottom: 0,
		right: 0
	}
});

export default DrawerMod;
