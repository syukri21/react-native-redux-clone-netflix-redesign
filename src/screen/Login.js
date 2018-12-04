import React, { Component } from 'react';
import { Container, Content, Form, Input, Item, Label, Icon, Button, Text, Footer, View } from 'native-base';

import { styles } from './login-style';

class Login extends Component {
	render() {
		return (
			<Container style={styles.container}>
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
						<Item floatingLabel last>
							<Icon style={styles.icon} active name="mail" />
							<Label style={styles.label}>Email</Label>
							<Input style={styles.input} />
						</Item>
						<Item floatingLabel last>
							<Icon style={styles.icon} active name="eye" />
							<Label style={styles.label}>Password</Label>
							<Input style={styles.input} />
						</Item>
					</Form>
					<View style={styles.buttonGroup}>
						<Button transparent dark onPress={() => this.props.navigation.navigate('ForgotPassword')}>
							<Text style={styles.buttonForgotPass}>Forgot My Password ?</Text>
						</Button>
						<Button
							primary
							full
							style={styles.buttonSignIn}
							onPress={() => this.props.navigation.navigate('Home')}
						>
							<Text>Sign In</Text>
						</Button>
					</View>
				</Content>
				<Footer style={styles.footer}>
					<Button transparent onPress={() => this.props.navigation.navigate('SignUp')}>
						<Text style={styles.buttonSignUp}>Sign up for free</Text>
					</Button>
				</Footer>
			</Container>
		);
	}
}

export default Login;
