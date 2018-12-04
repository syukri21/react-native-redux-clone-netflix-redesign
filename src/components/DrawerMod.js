import React, { Component } from 'react';
import { Text, View, Button } from 'native-base';
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

export default DrawerMod;
