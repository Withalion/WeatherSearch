export default function InfoPanelSkeleton() {
	return (
		<div className="flex flex-wrap gap-4 p-6 justify-around items-stretch content-center shadow-container">
			<h2 className="z-10 basis-full text-center text-2xl">City, Country</h2>
			<div className="basis-[30%] h-28 shadow-btn flex justify-center items-center"></div>
			<div className="basis-[29%] h-28 shadow-btn flex justify-center items-center text-xl"></div>
			<div className="basis-[30%] h-28 shadow-btn flex justify-center items-center text-xl"></div>
			<div className="basis-[45%] h-24 shadow-btn flex justify-center items-center text-xl"></div>
			<div className="basis-[45%] h-24 shadow-btn flex justify-center items-center text-xl"></div>
		</div>
	);
}
