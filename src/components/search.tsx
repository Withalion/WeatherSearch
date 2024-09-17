import { HiMagnifyingGlass } from 'react-icons/hi2';
import { handleSubmission } from '@/lib/actions';
import { useEffect } from 'react';
import { useFormState } from 'react-dom';

export default function Search({ onSearch }) {
	const [position, action] = useFormState(handleSubmission, null);

	const changeStyle = () => {
		const btn = document.getElementById('submitBtn');
		btn?.classList.add('shadow-btn-click');
	};

	useEffect(() => {
		if (position != null) onSearch(position);
	}, [onSearch, position]);

	return (
		<form action={action} className="flex justify-center gap-6 items-center">
			<input name="city" placeholder="London" required className="shadow-input h-10 ps-3" />
			<button
				id="submitBtn"
				type="submit"
				className="self-stretch shadow-btn active:shadow-btn-click basis-16 px-2 flex justify-center items-center"
				onClick={changeStyle}>
				<HiMagnifyingGlass />
			</button>
		</form>
	);
}
