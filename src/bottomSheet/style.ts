import { Dimensions, StyleSheet } from 'react-native';

const BottomSheetStyles = StyleSheet.create({
	container: {
		flex: 1,
		position: 'absolute',
		width: Dimensions.get('window').width,
		height: Dimensions.get('window').height,
		backgroundColor: '#ffffff75',
	},

	bottomView: {
		position: 'absolute',
		bottom: 10,
		marginLeft: '3%',
		marginRight: '3%',
		padding: 20,
		backgroundColor: '#222222',
		borderRadius: 20,
		borderTopLeftRadius: 20,
		width: '94%',
		minHeight: Dimensions.get('window').height / 4,
		alignItems: 'center',
	},

	bottomText: {
		marginBottom: 5,
		color: 'white',

	},

	bottomButtonText: {
		color: '#fff',
		fontWeight: '600',
	},

	bottomTextName: {
		color: 'red'
	},

	bottomButton: {
		padding: 20,
		backgroundColor: '#424242',
		marginVertical: 10,
		borderRadius: 10,
		width: '100%',
		alignItems: 'center',
	}
});

export default BottomSheetStyles;