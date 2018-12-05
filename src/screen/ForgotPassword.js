import React from 'react';
import { View } from 'react-native';
import { Container, Content, Footer, Button, Text, Icon, Form, Item, Label, Input } from 'native-base';
import LinearGradient from 'react-native-linear-gradient';
import { BoxShadow } from 'react-native-shadow';
import HeaderMod from '../components/HeaderMod';

import { styles } from './forgotPassword-style';
import BackgroundImage from '../components/BackgroundImage';
class ForgotPassword extends React.Component {
	render() {
		return (
			<Container>
				<HeaderMod {...this.props}>Forgot Password</HeaderMod>

				<BackgroundImage image={require('../assets/forgot.jpg')}>
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

				<Content style={styles.content}>
					<View style={styles.contentWrap}>
						<Text
							style={[
								styles.text,
								styles.mt10
							]}
						>
							We Help you to Reset your Password.
						</Text>
						<Form style={styles.mt10}>
							<Item>
								<Icon active name="mail" style={styles.icon} />
								<Label>Email</Label>
								<Input style={styles.input} />
							</Item>
						</Form>
						<BoxShadow setting={shadowOpt}>
							<Button
								full
								style={[
									styles.mt10,
									styles.buttonSignIn
								]}
								onPress={() => this.props.navigation.navigate('Login')}
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
								<Text>Sign In</Text>
							</Button>
						</BoxShadow>
						<View
							style={[
								styles.signUp,
								styles.mt10
							]}
						>
							<Button transparent light small>
								<Text style={styles.newUser}>New User?</Text>
							</Button>
							<Button transparent light small onPress={() => this.props.navigation.navigate('SignUp')}>
								<Text>SignUp Here</Text>
							</Button>
						</View>
					</View>
				</Content>
				<Footer style={styles.footer}>
					<Text style={styles.footerText}>
						After submit your registered mail id, check your Mail inbox for further details
					</Text>
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
	y: 42,
	style: {
		flex: 1,
		width: 340,
		alignSelf: 'center',
		borderRadius: 10
	}
};

export default ForgotPassword;
