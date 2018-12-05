import React from 'react';
import { Container, Content, Form, Label, Input, Icon, Item, CheckBox, Text, Button, View } from 'native-base';
import LinearGradient from 'react-native-linear-gradient';
import { BlurView } from 'react-native-blur';
import { Image, findNodeHandle } from 'react-native';
import HeaderMod from '../components/HeaderMod';
import Logo from '../components/Logo';
import { BoxShadow } from 'react-native-shadow';
import { styles } from './signup-style';

class SignUp extends React.Component {
	state = {
		check: false,
		viewRef: null
	};

	imageLoaded() {
		this.setState({
			viewRef: findNodeHandle(this.background)
		});
	}

	blurViewLoad = () => (
		<BlurView style={styles.absolute} blurType="dark" blurAmount={1} viewRef={this.state.viewRef} />
	);
	render() {
		return (
			<Container>
				<HeaderMod register {...this.props}>
					Register
				</HeaderMod>
				<Image
					source={require('../assets/register.jpg')}
					style={{
						position: 'absolute',
						width: '100%',
						height: '100%',
						zIndex: -100
					}}
					ref={(ref) => (this.background = ref)}
					onLoadEnd={this.imageLoaded.bind(this)}
				/>
				{/* {this.state.viewRef && this.blurViewLoad()} */}
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
				<Content style={styles.content}>
					<Logo />
					<View>
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

							<BoxShadow setting={shadowOpt}>
								<Button full iconLeft style={styles.buttonSignUp}>
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
	width: 340,
	height: 70,
	color: '#000',
	border: 10,
	radius: 15,
	opacity: 0.4,
	x: 0,
	y: -4,
	style: {
		flex: 1,
		width: 340,
		alignSelf: 'center',
		borderRadius: 10,
		marginBottom: 100
	}
};

export default SignUp;
