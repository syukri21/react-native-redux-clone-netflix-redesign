import React, { Component } from 'react';
import { Container, Content, Form, Input, Item, Label, Icon, Button, Text, Footer, View } from 'native-base';
import LinearGradient from 'react-native-linear-gradient';
import { TouchableOpacity } from 'react-native';
import { styles } from './login-style';
import { BoxShadow } from 'react-native-shadow';

import BackgroundImage from '../components/BackgroundImage';
class Login extends Component {
	render() {
		return (
			<Container style={styles.container}>
				<BackgroundImage image={require('../assets/full.jpg')}>
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
				</BackgroundImage>

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
						<BoxShadow setting={shadowOpt}>
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
						</BoxShadow>
					</View>
				</Content>

				<Footer style={styles.footer}>
					<LinearGradient
						colors={[
							'#B4155E',
							'#4050B4'
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

const shadowOpt = {
	width: 350,
	height: 70,
	color: '#000',
	border: 10,
	radius: 15,
	opacity: 0.3,
	x: -5,
	y: -4,
	style: {
		flex: 1,
		width: 340,
		alignSelf: 'center',
		borderRadius: 10,
		marginBottom: 100
	}
};

export default Login;
