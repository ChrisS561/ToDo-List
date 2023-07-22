import React, { ChangeEvent, useState } from 'react';
import NavBar from './NavBar';
import { Avatar, Button, Container, Typography } from '@mui/material';
import { useRecoilValue } from 'recoil';
import { loginFormAtom } from '../atoms';


type Props = {
	setIsLoggedIn: (value: boolean) => void;
};

// ProfileContainer component
export default function ProfileContainer({ setIsLoggedIn }: Props) {
	// State to hold the profile picture
	const [picture, setPicture] = useState('');

	// Access the loginFormAtom value using Recoil's useRecoilValue hook
	const login = useRecoilValue(loginFormAtom);
	console.log(login);

	// Function to handle the image upload
	//The FileReader object provides various methods to read files
	const handleImage = (event: ChangeEvent<HTMLInputElement>) => {
		event.preventDefault();
		if (event.target.files && event.target.files.length > 0) {
			const file = event.target.files[0];
			const reader = new FileReader();

			// Read the image file as a data URL and update the 'picture' state
			//onload: Triggers when the file reading is successfully completed.
			reader.onload = (e) => {
				if (e.target?.result) {
					setPicture(e.target.result.toString());
				}
			};

			reader.readAsDataURL(file);
		}
	};

	return (
		<div>
			{/* Render the NavBar component */}
			<NavBar setIsLoggedIn={setIsLoggedIn} />

			{/* Container to display profile information */}
			<Container
				fixed
				sx={{
					bgcolor: 'gray',
					marginTop: '10rem',
					height: '50vh',
					display: 'flex',
					alignItems: 'center',
					flexDirection: 'column',
				}}
			>
				{/* Heading */}
				<Typography variant="h3">Profile</Typography>

				{/* Avatar to display the profile picture */}
				<Avatar
					alt="Photo"
					src={picture}
					sx={{ width: 100, height: 100, marginTop: 3 }}
				/>

				{/* File input for uploading profile picture */}
				<div>
					<input
						type="file"
						name="file"
						onChange={handleImage}
						style={{ marginLeft: '9.7rem', marginTop: 10 }}
					/>
				</div>

				{/* Display the email and password from the loginFormAtom */}
				<Typography variant="h4" mt={3} mr={1}>
					Email: {login.email}
				</Typography>
				<Typography variant="h4" mt={1} mr={9}>
					Password: {login.password}
				</Typography>
			</Container>
		</div>
	);
}
