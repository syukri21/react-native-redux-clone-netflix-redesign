import React from 'react';
import { View } from 'react-native';
import {
	Container,
	Content,
	Footer,
	Button,
	Text,
	Icon,
	Form,
	Item,
	Label,
	Input
} from 'native-base';
import LinearGradient from 'react-native-linear-gradient';
import { BoxShadow } from 'react-native-shadow';
import HeaderMod from '../components/HeaderMod';

import BackgroundImage from '../components/BackgroundImage';

import {
	styles,
	backgroundLinearGradientConfig,
	buttonLinearGradientConfig,
	shadowOpt,
	signUpConfig
} from './forgotPassword-style';

class ForgotPassword extends React.Component {
	navigation = this.props.navigation;

	changeScreen = (to) => () => this.navigation.navigate(to);

	render() {
		return (
			<Container>
				<HeaderMod {...this.props}>Forgot Password</HeaderMod>
				<BackgroundImage image={require('../assets/forgot.jpg')}>
					<LinearGradient {...backgroundLinearGradientConfig} />
				</BackgroundImage>
				<Content style={styles.content}>
					<View style={styles.contentWrap}>
						<Text style={styles.helpText}>We Help you to Reset your Password.</Text>
						<Form style={styles.mt10}>
							<Item>
								<Icon active name='mail' style={styles.icon} />
								<Label>Email</Label>
								<Input style={styles.input} />
							</Item>
						</Form>
						<BoxShadow setting={shadowOpt}>
							<Button
								full
								style={styles.loginButton}
								onPress={this.changeScreen('Login')}
							>
								<LinearGradient {...buttonLinearGradientConfig} />
								<Text>Sign In</Text>
							</Button>
						</BoxShadow>
						<View style={styles.viewNewUser}>
							<Button {...signUpConfig}>
								<Text style={styles.newUser}>New User?</Text>
							</Button>
							<Button {...signUpConfig} onPress={this.changeScreen('SignUp')}>
								<Text>SignUp Here</Text>
							</Button>
						</View>
					</View>
				</Content>
				<Footer style={styles.footer}>
					<Text style={styles.footerText}>
						After submit your registered mail id, check your Mail inbox for further
						details
					</Text>
				</Footer>
			</Container>
		);
	}
}

export default ForgotPassword;
