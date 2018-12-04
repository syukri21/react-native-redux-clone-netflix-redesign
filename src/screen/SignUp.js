import React from 'react';
import { Container, Content, Form, Label, Input, Icon, Item, CheckBox, Text, Button, View } from 'native-base';

import HeaderMod from '../components/HeaderMod';
import Logo from '../components/Logo';

import { styles } from 'react-native';

class SignUp extends React.Component {
	state = {
		check: false
	};

	render() {
		return (
			<Container>
				<HeaderMod {...this.props}>Register</HeaderMod>
				<Content style={styles.content}>
					<Logo />
					<View style={styles.bgBlack}>
						<View cardBody tyle={styles.bgBlack}>
							<Form style={styles.form}>
								<Item floatingLabel last style={styles.itemInput}>
									<Icon active name="mail" style={styles.icon} />
									<Label style={styles.float}>Email</Label>
									<Input style={styles.input} />
								</Item>
								<Item floatingLabel last style={styles.itemInput}>
									<Icon active name="eye" style={styles.icon} />
									<Label style={styles.float}>Password</Label>
									<Input style={styles.input} />
								</Item>
								<Item floatingLabel last style={styles.itemInput}>
									<Icon active name="eye" style={styles.icon} />
									<Label style={styles.float}>Confirm Password</Label>
									<Input style={styles.input} />
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
							<Button full iconLeft style={styles.buttonSignUp}>
								<Text style={styles.text}>SignUp</Text>
							</Button>
						</View>
					</View>
				</Content>
			</Container>
		);
	}
}

export default SignUp;
