'use client';

import InfoPanel from '@/components/infoPanel';
import Search from '@/components/search';
import InfoPanelSkeleton from '@/components/skeletons/infoPanelSkeleton';
import { Position } from '@/lib/types';
import { Suspense, useState } from 'react';

export default function Home() {
	const [position, setPosition] = useState<Position | null>(null);
	const [submitBtnClicked, setSubmitBtnClicked] = useState(false);

	return (
		<div className="flex flex-col items-center justify-items-center min-h-screen">
			<main className="flex flex-col flex-auto grow justify-center items-stretch gap-6">
				<div className="self-center shadow-title p-4">
					<h1 className="text-5xl text-center">WeatherSearch</h1>
				</div>
				<Search
					onSearch={setPosition}
					isSubmitted={submitBtnClicked}
					submitChange={setSubmitBtnClicked}
				/>
				{position != null ? (
					<Suspense fallback={<InfoPanelSkeleton />}>
						<InfoPanel location={position} submitChange={setSubmitBtnClicked} />
					</Suspense>
				) : (
					<></>
				)}
			</main>
			<footer className="bg-green-100 ">
				{/* <a href="https://www.flaticon.com/free-icons/weather" title="weather icons">
					Weather icons created by Freepik - Flaticon
				</a> */}
			</footer>
		</div>
	);
}
