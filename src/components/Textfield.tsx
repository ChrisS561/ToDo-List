import { ChangeEvent } from 'react';

type Props = {
	label: string; // The label text for the text field
	inputType: string; // The type of the input field (e.g., 'text', 'number', 'email')
	handleChange: (event: ChangeEvent<HTMLInputElement>) => void;
	name:string
};

const TextField = ({ label, inputType, handleChange,name }: Props) => {
	return (
		<div>
			<div className="input-label">{label}</div>{' '}
			{/* Displaying the label text */}
			<input className="input-field" type={inputType} onChange={handleChange} name={name} />{' '}
			{/* Input field with the specified type */}
		</div>
	);
};

export default TextField;
