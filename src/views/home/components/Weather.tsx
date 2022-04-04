import React from 'react';
import {Text, View} from 'react-native';
import { boxStyles } from '../../../styles/Box';
import {WeatherProps} from '../../../types/Types';

export const Weather = (props: WeatherProps) => {
	return (
		<View style={boxStyles.container}>
			{props.temperature && props.weather ? (
				<>
					<Text style={boxStyles.text}>
						Temperature : {props.temperature}
					</Text>
					<Text style={boxStyles.text}>Weather : {props.weather}</Text>
				</>
			) : (
				<Text>Not available</Text>
			)}
		</View>
	);
};