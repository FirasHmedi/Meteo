import { StyleSheet } from "react-native";

export const inputStyles = StyleSheet.create({
	inputContainer: {
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'space-evenly',
		margin: 10,
	},
	textInput: {
		borderStyle: 'solid',
		borderColor: 'black',
		borderWidth: 1,
		width: '70%',
		fontSize: 16,
	},
});