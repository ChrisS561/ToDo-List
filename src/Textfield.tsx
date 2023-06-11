type Props = {
	label: string; // The label text for the text field
	type: string; // The type of the input field (e.g., 'text', 'number', 'email')
  };
  
  const TextField = ({ label, type }: Props) => {
	return (
	  <div>
		<div className="input-label">{label}</div> {/* Displaying the label text */}
		<input className="input-field" type={type} /> {/* Input field with the specified type */}
	  </div>
	);
  };
  
  export default TextField;
  