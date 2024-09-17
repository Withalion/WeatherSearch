'use client';

import InfoPanel from '@/components/infoPanel';
import Search from '@/components/search';
import InfoPanelSkeleton from '@/components/skeletons/infoPanelSkeleton';
import { Position } from '@/lib/types';
import { Suspense, useEffect, useState } from 'react';

export default function Home() {
	const [position, setPosition] = useState<Position | null>(null);

	useEffect(() => {
		console.log(JSON.stringify(position));
	}, [position]);

	return (
		<div className="flex flex-col items-center justify-items-center min-h-screen font-[family-name:var(--font-geist-sans)]">
			<main className="flex flex-col flex-auto grow justify-center items-stretch gap-6">
				<h1 className="text-5xl">WeatherSearch</h1>
				<Search onSearch={setPosition} />
				{/* <Suspense fallback={<InfoPanelSkeleton />}>
					<InfoPanel />
				</Suspense> */}
			</main>
			<footer className="bg-green-100 ">
				{/* <a href="https://www.flaticon.com/free-icons/weather" title="weather icons">
					Weather icons created by Freepik - Flaticon
				</a> */}
			</footer>
		</div>
	);
}
