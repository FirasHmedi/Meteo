import React from 'react';
import {
	StyleSheet,
	Text,
	TextInput,
	TouchableOpacity,
	View,
} from 'react-native';
import { inputStyles } from '../../../styles/Input';

interface Props {
	onSearch: () => void;
	setCity: (city: string) => void;
}

export const Input = (props: Props) => {
	return (
		<View style={inputStyles.inputContainer}>
			<TextInput
				placeholder="Type here your city"
				style={inputStyles.textInput}
				autoCorrect
				onChangeText={newCity => props.setCity(newCity)}
			/>
			<TouchableOpacity onPress={props.onSearch}>
				<Text>Search</Text>
			</TouchableOpacity>
		</View>
	);
};