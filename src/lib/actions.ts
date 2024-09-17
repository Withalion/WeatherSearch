'use server';

import { Position } from './types';

export async function handleSubmission(previousState: Position | null, formData: FormData) {
	const city = formData.get('city');
	const position: Position = await fetch(
		`http://api.openweathermap.org/geo/1.0/direct?q=${city}&limit=1&appid=${process.env.API_KEY}`
	)
		.then(response => response.json())
		.then((body): Position => {
			return {
				name: body[0].name,
				country: body[0].country,
				lat: body[0].lat,
				lon: body[0].lon,
			};
		});
	return position;
}

export async function lookupWeather(position: Position) {
	const weather: object = await fetch(
		`https://api.openweathermap.org/data/2.5/weather?lat=${position.lat}&lon=${position.lon}&appid=${process.env.API_KEY}&units=metric`
	).then(response => response.json());

	return weather;
}
