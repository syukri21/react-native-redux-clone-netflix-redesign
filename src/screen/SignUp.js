import React from 'react';
import {
	Container,
	Content,
	Form,
	Label,
	Input,
	Icon,
	Item,
	CheckBox,
	Text,
	Button,
	View
} from 'native-base';
import LinearGradient from 'react-native-linear-gradient';
import { BoxShadow } from 'react-native-shadow';

import { connect } from 'react-redux';
import { onAddUser } from '../actions/usersAction';

import BackgroundImage from '../components/BackgroundImage';
import HeaderMod from '../components/HeaderMod';
import Logo from '../components/Logo';

import {
	styles,
	linearGradientConfig,
	buttonConfig,
	buttomLinearGradientConfig,
	shadowOpt
} from './signup-style';

class SignUp extends React.Component {
	state = {
		check : false,
		user  : {
			name        : '',
			email       : '',
			pass        : '',
			confirmPass : ''
		}
	};

	addUser() {
		this.props.addUser();
	}

	handleInput = (value, key) => {
		if (key == 'check') {
			this.setState({
				[key] : !this.state.check
			});
		} else {
			this.setState({
				user : {
					...this.state.user,
					[key] : value
				}
			});
		}
	};

	handleSignUp = () => (user) => this.props.addUser(user.name, user.email, user.pass);

	render() {
		let { user } = this.state;
		return (
			<Container>
				<HeaderMod register {...this.props}>
					Register
				</HeaderMod>
				<BackgroundImage image={require('../assets/register.jpg')}>
					<LinearGradient {...linearGradientConfig} />
				</BackgroundImage>
				<Content style={styles.content}>
					<Logo />
					<View>
						<View cardBody tyle={styles.bgBlack}>
							<Form style={styles.form}>
								<Item floatingLabel last style={styles.itemInput}>
									<Icon active name='person' style={styles.icon} />
									<Label style={styles.float}>Username</Label>
									<Input
										style={styles.input}
										onChangeText={(e) => this.handleInput('name', e)}
									/>
								</Item>
								<Item floatingLabel last style={styles.itemInput}>
									<Icon active name='mail' style={styles.icon} />
									<Label style={styles.float}>Email</Label>
									<Input
										style={styles.input}
										onChangeText={(e) => this.handleInput('email', e)}
									/>
								</Item>
								<Item floatingLabel last style={styles.itemInput}>
									<Icon active name='eye' style={styles.icon} />
									<Label style={styles.float}>Password</Label>
									<Input
										style={styles.input}
										onChangeText={(e) => this.handleInput('pass', e)}
									/>
								</Item>
								<Item floatingLabel last style={styles.itemInput}>
									<Icon active name='eye' style={styles.icon} />
									<Label style={styles.float}>Confirm Password</Label>
									<Input
										style={styles.input}
										onChangeText={(e) =>
											this.handleInput('confirmPass', e)}
									/>
								</Item>
							</Form>
							<View style={styles.viewCheckBox}>
								<CheckBox
									checked={this.state.check}
									onPress={(e) => this.handleInput('check', null)}
								/>
								<Text style={styles.text}>
									I accept the Terms and Conditions
								</Text>
							</View>
							<BoxShadow setting={shadowOpt}>
								<Button
									{...buttonConfig}
									onPress={this.handleSignUp(user)}
								>
									<LinearGradient {...buttomLinearGradientConfig} />
									<Text style={styles.text}>SignUp</Text>
								</Button>
							</BoxShadow>
						</View>
					</View>
				</Content>
			</Container>
		);
	}
}

const mapDispatchToProps = (dispatch) => ({
	addUser : (id, email, password) => dispatch(onAddUser(id, email, password))
});

export default connect(null, mapDispatchToProps)(SignUp);
