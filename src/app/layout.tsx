import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
	title: 'WeatherSearch App',
	description:
		'Looking for current weather in cities around the world? You are in the right place.',
	keywords: ['Weather', 'Forecast'],
	authors: [{ name: 'Matej Bagar' }],
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body className={` antialiased`}>{children}</body>
		</html>
	);
}
