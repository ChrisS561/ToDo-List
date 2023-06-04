// Create a new component called SubmitButton
// // It should return a button with the className “submit-button”
// // Add that component to the LoginContainer below the two Textfield components
// Create a handleClick function that console logs out I was clicked
// Link that function to the submit button’s onClick property

export default function SubmitButton() {
	const handleClick = () => {
		console.log('I was clicked');
	};

	return (
		<button onClick={handleClick} className="submit-button">
			Login
		</button>
	);
}
