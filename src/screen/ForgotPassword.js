import React from 'react';
import { View } from 'react-native';
import { Container, Content, Footer, Button, Text, Icon, Form, Item, Label, Input } from 'native-base';

import HeaderMod from '../components/HeaderMod';

import { styles } from './forgotPassword-style';

class ForgotPassword extends React.Component {
	render() {
		return (
			<Container>
				<HeaderMod {...this.props}>Forgot Password</HeaderMod>
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
						<Button
							full
							style={[
								styles.mt10,
								styles.buttonSignIn
							]}
							onPress={() => this.props.navigation.navigate('Login')}
						>
							<Text>Sign In</Text>
						</Button>
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

export default ForgotPassword;
