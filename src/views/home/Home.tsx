import React, {useState} from 'react';
import {SafeAreaView} from 'react-native';
import {fetchData} from '../../ApiCall';
import {AirQualityToken, WeatherApiKey} from '../../Config';
import {homeStyles} from '../../styles/Home';
import {WeatherProps} from '../../types/Types';
import {AirQuality} from './components/AirQuality';
import {Input} from './components/Input';
import {Weather} from './components/Weather';

const weatherPath = (city: string) =>
	`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${WeatherApiKey}`;
const airQualityPath = (city: string) =>
	`https://api.waqi.info/feed/${city}/?token=${AirQualityToken}`;

const getTempInCelsius = (temp: number) =>
	parseFloat((temp - 273.15).toFixed(2)); // from kelvin to Celsius

const Home = () => {
	const [city, setCity] = useState('');
	const [weather, setWeather] = useState<WeatherProps>();
	const [airQualityIndex, setAirQualityIndex] = useState<number>();

	const fetchWeather = async () => {
		const _weather = await fetchData(weatherPath(city));
		if (_weather.main.temp !== undefined && _weather.weather?.length > 0) {
			setWeather({
				temperature: getTempInCelsius(_weather.main.temp),
				weather: _weather.weather[0].description,
			});
		}
	};

	const fetchAirQuality = async () => {
		const _airQuality = await fetchData(airQualityPath(city));
		if (_airQuality.data.aqi !== undefined && _airQuality.data.aqi != '-') {
			setAirQualityIndex(_airQuality.data.aqi);
		}
	};

	const initializeData = () => {
		setWeather({});
		setAirQualityIndex(undefined);
	};

	const onSearch = () => {
		initializeData();
		if (city.length > 0) {
			fetchWeather();
			fetchAirQuality();
		}
	};

	return (
		<SafeAreaView style={homeStyles.container}>
			<Input onSearch={onSearch} setCity={setCity} />
			<Weather
				temperature={weather?.temperature}
				weather={weather?.weather}
			/>
			<AirQuality aqi={airQualityIndex} />
		</SafeAreaView>
	);
};

export default Home;
