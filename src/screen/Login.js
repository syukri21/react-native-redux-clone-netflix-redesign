import React, { Component } from 'react';
import { Container, Content, Form, Input, Item, Label, Icon, Button, Text, Footer, View } from 'native-base';
import LinearGradient from 'react-native-linear-gradient';
import { Image, TouchableOpacity, findNodeHandle } from 'react-native';
import { styles } from './login-style';
import { BlurView, VibrancyView } from 'react-native-blur';

class Login extends Component {
	state = {
		viewRef: null
	};

	imageLoaded() {
		this.setState({
			viewRef: findNodeHandle(this.background)
		});
	}

	render() {
		return (
			<Container style={styles.container}>
				<Image
					source={require('../assets/full.jpg')}
					style={{
						position: 'absolute',
						height: '100%'
					}}
					ref={(ref) => (this.background = ref)}
					onLoadEnd={this.imageLoaded.bind(this)}
				/>
				{this.state.viewRef && (
					<BlurView style={styles.absolute} blurType="dark" blurAmount={1} viewRef={this.state.viewRef} />
				)}

				<LinearGradient
					colors={[
						'#000000',
						'#00000077',
						'#ffffff11',
						'#00000077',
						'#000000'
					]}
					style={styles.absolute}
					start={{
						x: 0,
						y: 1
					}}
					end={{
						x: 0,
						y: 0
					}}
				/>
				<View style={styles.contentUp}>
					<Icon
						style={[
							styles.icon,
							styles.title,
							styles.red
						]}
						active
						name="play"
					/>
					<Text style={styles.title}>VIDEOS</Text>
				</View>
				<Content style={styles.contentDown}>
					<Form style={styles.form}>
						<Item floatingLabel last style={styles.item}>
							<Icon style={styles.icon} active name="mail" />
							<Label style={styles.label}>Email</Label>
							<Input style={styles.input} />
						</Item>
						<Item floatingLabel last style={styles.item}>
							<Icon style={styles.icon} active name="eye" />
							<Label style={styles.label}>Password</Label>
							<Input style={styles.input} />
						</Item>
					</Form>
					<View style={styles.buttonGroup}>
						<TouchableOpacity
							onPress={() => this.props.navigation.navigate('ForgotPassword')}
							style={{ padding: 10, marginBottom: 20 }}
						>
							<Text style={styles.buttonForgotPass}>Forgot My Password ?</Text>
						</TouchableOpacity>
						<Button
							primary
							full
							style={styles.buttonSignIn}
							onPress={() => this.props.navigation.navigate('Home')}
						>
							<LinearGradient
								colors={[
									'#B7135C',
									'#3F51B5'
								]}
								style={styles.absolute}
								start={{
									x: 0,
									y: 1
								}}
								end={{
									x: 1,
									y: 0
								}}
							/>
							<Text style={styles.textSignIn}>Log In</Text>
						</Button>
					</View>
				</Content>
				<Footer style={styles.footer}>
					<LinearGradient
						colors={[
							'#B7135C55',
							'#3F51B555'
						]}
						style={styles.absolute}
						start={{
							x: 0,
							y: 1
						}}
						end={{
							x: 1,
							y: 0
						}}
					/>
					<Button transparent onPress={() => this.props.navigation.navigate('SignUp')}>
						<Text style={styles.buttonSignUp}>Sign up for free</Text>
					</Button>
				</Footer>
			</Container>
		);
	}
}

export default Login;
