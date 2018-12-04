import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
	content: {
		flex: 1,
		backgroundColor: 'black'
	},
	wrapperImage: {
		backgroundColor: 'black',
		justifyContent: 'center',
		alignItems: 'center',
		flex: 1,
		height: 250,
		position: 'relative',
		marginBottom: 30
	},
	image: {
		borderBottomLeftRadius: 1000,
		borderBottomRightRadius: 1000,
		height: 250,
		width: 400
	},

	viewPlayButton: {
		width: '100%',
		position: 'absolute',
		bottom: 0,
		left: 0,
		flex: 1
	},
	playButton: {
		justifyContent: 'center',
		alignItems: 'center',
		marginLeft: '50%',
		transform: [
			{ translateX: -30 },
			{ translateY: 30 }
		],
		width: 60,
		height: 60,
		borderRadius: 60
	},

	cardItem: {
		justifyContent: 'flex-end',
		flexDirection: 'row'
	},
	warpTitle: {
		width: '100%',
		justifyContent: 'center'
	},
	title: {
		color: '#000',
		fontSize: 18,
		textAlign: 'center'
	},
	warpProduction: {
		width: '100%'
	},
	textProduction: {
		color: '#00000088',
		fontSize: 12,
		textAlign: 'center',
		marginTop: 10
	},
	warpRating: {
		justifyContent: 'center'
	},
	textDescription: {
		fontSize: 12,
		color: '#343434',
		textAlign: 'center'
	},
	textTanggalRilisLabelRight: {
		fontSize: 12,
		opacity: 0.6,
		textAlign: 'right'
	},
	textTanggalRilisLabelLeft: {
		fontSize: 12,
		opacity: 0.6,
		textAlign: 'left'
	},
	textTanggalRilis: {
		fontSize: 12,
		opacity: 0.8
	}
});

const styleButtonGroup1 = StyleSheet.create({
	viewButton: {
		height: 50,
		width: '100%',
		flex: 1,
		position: 'absolute',
		top: 0,
		left: 0,
		flexDirection: 'row',
		justifyContent: 'space-between'
	},
	iconButton: { fontSize: 30 }
});

const styleButtonGroup2 = StyleSheet.create({
	viewButton: {
		flex: 1,
		width: '100%',
		flexDirection: 'row',
		justifyContent: 'space-between'
	},
	iconButton: { fontSize: 40 }
});

export { styles, styleButtonGroup1, styleButtonGroup2 };
