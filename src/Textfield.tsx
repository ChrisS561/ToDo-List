import { ChangeEvent } from 'react';

type Props = {
	label: string; // The label text for the text field
	type: string; // The type of the input field (e.g., 'text', 'number', 'email')
	handleChange: (event: ChangeEvent<HTMLInputElement>) => void;
};

const TextField = ({ label, type, handleChange }: Props) => {
	return (
		<div>
			<div className="input-label">{label}</div>{' '}
			{/* Displaying the label text */}
			<input className="input-field" type={type} onChange={handleChange} />{' '}
			{/* Input field with the specified type */}
		</div>
	);
};

export default TextField;
