import { HiMagnifyingGlass } from 'react-icons/hi2';
import { handleSubmission } from '@/lib/actions';
import { Dispatch, SetStateAction, useEffect } from 'react';
import { useFormState } from 'react-dom';
import { Position } from '@/lib/types';

export default function Search({
	onSearch,
	isSubmitted,
	submitChange,
}: {
	onSearch: Dispatch<SetStateAction<Position | null>>;
	isSubmitted: boolean;
	submitChange: Dispatch<SetStateAction<boolean>>;
}) {
	const [position, action] = useFormState(handleSubmission, null);

	useEffect(() => {
		if (position != null) onSearch(position);
	}, [onSearch, position]);

	return (
		<form action={action} className="flex justify-center gap-6 items-center">
			<input name="city" placeholder="London" required className="shadow-input h-10 ps-3" />
			<button
				id="submitBtn"
				type="submit"
				className={
					isSubmitted
						? 'self-stretch basis-16 px-2 flex justify-center items-center shadow-btn-click'
						: 'self-stretch shadow-btn basis-16 px-2 flex justify-center items-center'
				}
				onClick={() => submitChange(true)}>
				<HiMagnifyingGlass />
			</button>
		</form>
	);
}
