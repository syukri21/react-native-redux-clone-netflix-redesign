import React from 'react';
import { Container, Content, Form, Label, Input, Icon, Item, CheckBox, Text, Button, View } from 'native-base';
import LinearGradient from 'react-native-linear-gradient';
import { BoxShadow } from 'react-native-shadow';

import {connect} from 'react-redux';
import {onAddUser} from '../actions/usersAction';

import { styles } from './signup-style';
import BackgroundImage from '../components/BackgroundImage';
import HeaderMod from '../components/HeaderMod';
import Logo from '../components/Logo';


class SignUp extends React.Component {
	state = {
		check: false,
		user : {
			name: '',
			email: '',
			pass: '',
			confirmPass : ''
		}
	};

	addUser (){
		this.props.addUser()
	}

	handleInput = (key, value) => {
		this.setState({
			user : {
				...this.state.user,
				[key] : value
			}	
		})
	
	}


	render() {
		let {user} = this.state
		return (
			<Container>
				<HeaderMod register {...this.props}>
					Register
				</HeaderMod>
				<BackgroundImage image={require('../assets/register.jpg')}>
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
					<Logo />
					<View>
						<View cardBody tyle={styles.bgBlack}>
							<Form style={styles.form}>
								<Item floatingLabel last style={styles.itemInput}>
									<Icon active name="person" style={styles.icon} />
									<Label style={styles.float}>Username</Label>
									<Input style={styles.input} onChangeText={(e) => this.handleInput('name', e )}   />
								</Item>
								<Item floatingLabel last style={styles.itemInput}>
									<Icon active name="mail" style={styles.icon} />
									<Label style={styles.float}  >Email</Label>
									<Input style={styles.input} onChangeText={(e) => this.handleInput('email', e )}  />
								</Item>
								<Item floatingLabel last style={styles.itemInput}>
									<Icon active name="eye" style={styles.icon} />
									<Label style={styles.float}  >Password</Label>
									<Input style={styles.input} onChangeText={(e) => this.handleInput('pass', e )} />
								</Item>
								<Item floatingLabel last style={styles.itemInput}>
									<Icon active name="eye" style={styles.icon} />
									<Label style={styles.float}>Confirm Password</Label>
									<Input style={styles.input}  onChangeText={(e) => this.handleInput('confirmPass', e )}/>
								</Item>
							</Form>
							<View
								style={[
									styles.itemInput,
									styles.checkBoxItem
								]}
							>
								<CheckBox
									checked={this.state.check}
									onPress={() => this.setState({ check: !this.state.check })}
								/>
								<Text style={styles.text}>I accept the Terms and Conditions</Text>
							</View>

							<BoxShadow setting={shadowOpt}>
								<Button disable full iconLeft style={styles.buttonSignUp} onPress={() => this.props.addUser(user.name, user.email, user.pass)}> 
									<LinearGradient
										colors={[
											'#B7135C',
											'#3F51B5'
										]}
										style={{
											width: '100%',
											height: 70,
											position: 'absolute'
										}}
										start={{
											x: 0,
											y: 1
										}}
										end={{
											x: 1,
											y: 0
										}}
									/>
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



const mapDispatchToProps = (dispatch) => ({
	addUser : (id, email, password) => dispatch(onAddUser(id, email, password))
})

export default connect(null, mapDispatchToProps)(SignUp);
