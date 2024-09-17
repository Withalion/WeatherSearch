import { TCountryCode } from 'countries-list';

export type Position = {
	name: string;
	country: TCountryCode;
	lat: number;
	lon: number;
};
