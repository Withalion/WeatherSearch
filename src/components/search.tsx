import { HiMagnifyingGlass } from 'react-icons/hi2';
import { handleSubmission } from '@/lib/actions';
import { useEffect } from 'react';
import { useFormState } from 'react-dom';

export default function Search({ onSearch }) {
	const [position, action] = useFormState(handleSubmission, null);

	useEffect(() => {
		if (position != null) onSearch(position);
	}, [onSearch, position]);

	return (
		<form action={action} className="flex justify-around items-center">
			<input
				name="city"
				placeholder="London"
				required
				className="rounded-lg border-black border-solid border ps-1"
			/>
			<button
				type="submit"
				className="self-stretch rounded-lg border-black border px-2 hover:bg-yellow-300">
				<HiMagnifyingGlass />
			</button>
		</form>
	);
}
