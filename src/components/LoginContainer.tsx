import Textfield from './Textfield'; // Importing the Textfield component from './Textfield'
import SubmitButton from './SubmitButton'; // Importing the SubmitButton component from './SubmitButton'
import { ChangeEvent, useState } from 'react';

const credentials = {
	email: 'test@.com',
	password: 'password',
};

type Props = {
	setIsLoggedIn: (value: boolean) => void;
};

export default function LoginContainer({ setIsLoggedIn }: Props) {
	const [email, setEmail] = useState(''); // State variable for email input
	const [password, setPassword] = useState(''); // State variable for password input

	const handleEmailChange = (event: ChangeEvent<HTMLInputElement>) => {
		setEmail(event.target.value); // Update email state when the input value changes
		console.log(email); // Log the email value
	};

	const handlePasswordChange = (event: ChangeEvent<HTMLInputElement>) => {
		setPassword(event.target.value); // Update password state when the input value changes
		console.log(password); // Log the password value
	};

	const handleSubmit = () => {
		if (email === credentials.email && password === credentials.password) {
			setIsLoggedIn(true); // Set isLoggedIn to true if email and password match the credentials
			console.log('You are logged in');
			localStorage.setItem('loggedInStatus', 'loggedIn');
		} else {
			console.error('Login Failed'); // Log an error if login fails
			localStorage.setItem('loggedInStatus', 'notLoggedIn');
		}
	};

	return (
		<div className="login-box">
			{/* Outer container for the login box */}
			<div className="login-title">Login</div> {/* Title for the login box */}
			<Textfield
				label="Email"
				inputType="text"
				handleChange={handleEmailChange}
				name='Email'
			/>{' '}
			{/* Textfield component for the email input */}
			<Textfield
				label="Password"
				inputType="password"
				handleChange={handlePasswordChange}
				name='Password'
			/>{' '}
			{/* Textfield component for the password input */}
			<SubmitButton handleSubmit={handleSubmit} />{' '}
			{/* SubmitButton component */}
		</div>
	);
}
