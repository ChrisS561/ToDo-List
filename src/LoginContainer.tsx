import Textfield from './Textfield'; // Importing the Textfield component from './Textfield'
import SubmitButton from './SubmitButton'; // Importing the SubmitButton component from './SubmitButton'
import { ChangeEvent, useState } from 'react';



const credentials = { 
    email: "test@.com",
    password: "password"
}

type Props = {
	setIsLoggedIn: (value: boolean) => void;
};

export default function LoginContainer({ setIsLoggedIn }: Props) {
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');

	const handleEmailChange = (event: ChangeEvent<HTMLInputElement>) => {
		setEmail(event.target.value);
		console.log(email);
	};

	const handlePasswordChange = (event: ChangeEvent<HTMLInputElement>) => {
		setPassword(event.target.value);
		console.log(password);
	};

	const handleSubmit = () => {
		if (email === credentials.email && password === credentials.password){
			setIsLoggedIn(true);
      console.log("You are logged in");
      localStorage.setItem("loggedInStatus", "loggedIn" );

  }else{ console.error('Login Failed');
  localStorage.setItem("loggedInStatus", "notLoggedIn")
  }};

	return (
		<div className="login-box">
			{' '}
			{/* Outer container for the login box */}
			<div className="login-title">Login</div> {/* Title for the login box */}
			<Textfield
				label="Email"
				type="text"
				handleChange={handleEmailChange}
			/>{' '}
			{/* Textfield component for the email input */}
			<Textfield
				label="Password"
				type="password"
				handleChange={handlePasswordChange}
			/>{' '}
			{/* Textfield component for the password input */}
			<SubmitButton handleSubmit={handleSubmit} />{' '}
			{/* SubmitButton component */}
		</div>
	);
}
