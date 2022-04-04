import React from 'react';
import {Text, View} from 'react-native';
import { boxStyles } from '../../../styles/Box';
import {AirQualityProps} from '../../../types/Types';

const getAirQualityType = (aqi?: number) => {
	if (aqi === undefined) {
		return 'Not available';
	}
	if (aqi >= 0 && aqi <= 50) {
		return 'Good';
	} else if (aqi >= 51 && aqi <= 100) {
		return 'Moderate';
	} else if (aqi >= 101 && aqi <= 150) {
		return 'Unhealthy for sensitive groups';
	} else if (aqi >= 151 && aqi <= 200) {
		return 'Unhealthy';
	} else if (aqi >= 201 && aqi <= 300) {
		return 'Very unhealthy';
	} else if (aqi > 300) {
		return 'Hazardous';
	}
};

export const AirQuality = (props: AirQualityProps) => {
	return (
		<View style={boxStyles.container}>
			<Text style={boxStyles.text}>
				Air quality : {getAirQualityType(props.aqi)}
			</Text>
			{props.aqi !== undefined && (
				<Text style={boxStyles.text}>Air quality index : {props.aqi}</Text>
			)}
		</View>
	);
};