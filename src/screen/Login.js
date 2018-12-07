import React, { Component } from 'react';
import {
	Container,
	Content,
	Form,
	Input,
	Item,
	Label,
	Icon,
	Button,
	Text,
	Footer,
	View
} from 'native-base';
import LinearGradient from 'react-native-linear-gradient';
import { TouchableOpacity } from 'react-native';
import { BoxShadow } from 'react-native-shadow';

import { connect } from 'react-redux';
import { onLogin, onLogout } from '../actions/usersAction';

import BackgroundImage from '../components/BackgroundImage';

import {
	styles,
	backgroundLinearGradientConfig,
	buttonLinearGradientConfig,
	shadowOpt,
	buttonLoginConfig
} from './login-style';

class Login extends Component {
	constructor(props) {
		super(props);
		this.state = {
			isLoged  : props.isUserLoged,
			username : '',
			password : ''
		};
		this.navigation = props.navigation;
		this.onLogout = this.props.onLogout;
		this.onLogin = this.props.onLogin;
	}

	handleInput = (key) => (value) =>
		this.setState((prevState) => ({
			...prevState,
			[key] : value
		}));

	handleLogin = () => {
		this.onLogout();
		let { username, password } = this.state;
		this.onLogin(username, password);
	};

	changeScreen = (to) => () => this.navigation.navigate(to);

	componentWillReceiveProps(nextProps) {
		nextProps.isUserLoged && this.props.navigation.navigate('Home');
	}

	componentDidMount() {
		this.props.isUserLoged && this.props.navigation.navigate('Home');
	}

	render() {
		return (
			<Container style={styles.container}>
				<BackgroundImage image={require('../assets/full.jpg')}>
					<LinearGradient {...backgroundLinearGradientConfig} />
				</BackgroundImage>
				<View style={styles.contentUp}>
					<Icon style={styles.iconVideos} active name='play' />
					<Text style={styles.title}>VIDEOS</Text>
				</View>
				<Content style={styles.contentDown}>
					<Form style={styles.form}>
						<Item floatingLabel last style={styles.item}>
							<Icon style={styles.icon} active name='mail' />
							<Label style={styles.label}>Email</Label>
							<Input
								style={styles.input}
								onChangeText={this.handleInput('username')}
							/>
						</Item>
						<Item floatingLabel last style={styles.item}>
							<Icon style={styles.icon} active name='eye' />
							<Label style={styles.label}>Password</Label>
							<Input
								style={styles.input}
								secureTextEntry
								onChangeText={this.handleInput('password')}
							/>
						</Item>
					</Form>
					<View style={styles.buttonGroup}>
						<TouchableOpacity
							onPress={this.changeScreen('ForgotPassword')}
							style={styles.viewForgotPass}
						>
							<Text style={styles.buttonForgotPass}>
								Forgot My Password ?
							</Text>
						</TouchableOpacity>
						<BoxShadow setting={shadowOpt}>
							<Button {...buttonLoginConfig} onPress={this.handleLogin}>
								<LinearGradient {...buttonLinearGradientConfig} />
								<Text style={styles.textSignIn}>Log In</Text>
							</Button>
						</BoxShadow>
					</View>
				</Content>
				<Footer style={styles.footer}>
					<LinearGradient {...buttonLinearGradientConfig} />
					<Button transparent onPress={this.changeScreen('SignUp')}>
						<Text style={styles.buttonSignUp}>Sign up for free</Text>
					</Button>
				</Footer>
			</Container>
		);
	}
}

const mapStateToProps = (state) => ({ isUserLoged: state.isUserLoged });

const mapDispatchToProps = (dispatch) => ({
	onLogin  : (username, password) => dispatch(onLogin(username, password)),
	onLogout : () => dispatch(onLogout())
});

export default connect(mapStateToProps, mapDispatchToProps)(Login);
