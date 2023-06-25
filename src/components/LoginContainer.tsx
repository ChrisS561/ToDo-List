import Textfield from './Textfield'; // Importing the Textfield component from './Textfield'
import SubmitButton from './SubmitButton'; // Importing the SubmitButton component from './SubmitButton'
import { ChangeEvent, useState } from 'react';

const credentials = {
	email: 'test@test.com',
	password: 'password',
};

type Props = {
	setIsLoggedIn: (value: boolean) => void;
};

export default function LoginContainer({ setIsLoggedIn }: Props) {
	const [loginForm, setLoginForm] = useState({
		email: '',
		password: '',
	});
	const [errorMessage, setErrorMessage] = useState<string | null>(null);

	const handleLoginChange = (event: ChangeEvent<HTMLInputElement>) => {
		const { name, value } = event.target;
		setLoginForm({ ...loginForm, [name]: value });
	};

	const handleSubmit = () => {
		const { email, password } = loginForm;
		if (email === credentials.email && password === credentials.password) {
			setIsLoggedIn(true); // Set isLoggedIn to true if email and password match the credentials
			console.log('You are logged in');
			localStorage.setItem('loggedInStatus', 'loggedIn');
			setErrorMessage('');
		} else {
			console.error('Login Failed'); // Log an error if login fails
			localStorage.setItem('loggedInStatus', 'notLoggedIn');
			setErrorMessage('Invalid email or password');
		}
	};

	return (
		<div className="login-box">
			{/* Outer container for the login box */}
			<div className="login-title">Login</div> {/* Title for the login box */}
			<Textfield
				label="email"
				inputType="text"
				handleChange={handleLoginChange}
				name="email"
			/>{' '}
			{/* Textfield component for the email input */}
			<Textfield
				label="password"
				inputType="password"
				handleChange={handleLoginChange}
				name="password"
			/>{' '}
			{/* Textfield component for the password input */}
			<SubmitButton handleSubmit={handleSubmit} />{' '}
			{/* SubmitButton component */}
			{errorMessage && <div> {errorMessage}</div>}
		</div>
	);
}
