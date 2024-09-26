import Image from 'next/image';
import { Position } from '@/lib/types';
import { lookupWeather } from '@/lib/actions';
import { useEffect, useState } from 'react';
import { getCountryData, getEmojiFlag } from 'countries-list';

export default function InfoPanel({ location }: { location: Position }) {
	const [imageSource, setImageSource] = useState('');
	const [temperature, setTemperature] = useState(0);
	const [weatherCondition, setWeatherCondition] = useState('');
	const [humidity, setHumidity] = useState(0);
	const [windSpeed, setWindSpeed] = useState(0);

	const loadInfo = (location: Position) => {
		lookupWeather(location).then(weather => {
			setImageSource(weather.weather[0].icon);
			setTemperature(weather.main.temp);
			setWeatherCondition(weather.weather[0].description);
			setHumidity(weather.main.humidity);
			setWindSpeed(weather.wind.speed);
		});
	};

	const changeStyle = () => {
		const btn = document.getElementById('submitBtn');
		btn?.classList.remove('shadow-btn-click');
	};

	useEffect(() => {
		loadInfo(location);
		changeStyle();
	}, [location]);

	return (
		<div className="flex flex-wrap gap-4 p-6 justify-around items-stretch content-center shadow-container">
			<h2 className="z-10 basis-full text-center text-2xl">
				{location.name}, {getCountryData(location.country).name} {getEmojiFlag(location.country)}
			</h2>
			<div className="basis-[30%] h-28 shadow-btn flex justify-center items-center">
				<Image
					src={`https://openweathermap.org/img/wn/${imageSource}@2x.png`}
					alt="Picture describing the current weather condition"
					width={100}
					height={100}
				/>
			</div>
			<div className="basis-[30%] h-28 shadow-btn flex justify-center items-center text-xl">
				<p>{temperature} &deg;C</p>
			</div>
			<div className="basis-[30%] h-28 shadow-btn flex justify-center items-center text-xl">
				<p>{weatherCondition}</p>
			</div>
			<div className="basis-[48%] h-24 shadow-btn flex justify-center items-center text-xl">
				<p>Humidity:&ensp;</p>
				<p>{humidity} %</p>
			</div>
			<div className="basis-[48%] h-24 shadow-btn flex justify-center items-center text-xl">
				<p>Wind:&ensp;</p>
				<p>{windSpeed} m/s</p>
			</div>
		</div>
	);
}
