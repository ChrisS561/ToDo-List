import React, { ChangeEvent, useState } from 'react';
import NavBar from './NavBar';
import { Avatar, Button, Container, Typography } from '@mui/material';

type Props = {
	setIsLoggedIn: (value: boolean) => void;
};

export default function ProfileContainer({ setIsLoggedIn }: Props) {
	const [picture, setPicture] = useState('');

    
	const handleImage = (event: ChangeEvent<HTMLInputElement>) => {
        event.preventDefault()
		if (event.target.files && event.target.files.length > 0) {
			const file = event.target.files[0];
			const reader = new FileReader();

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
			<NavBar setIsLoggedIn={setIsLoggedIn} />
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
				<Typography variant="h3">Profile</Typography>
				<Avatar
					alt="Photo"
					src={picture}
					sx={{ width: 100, height: 100, marginTop: 3 }}
				/>
				<div>
					<input
						type="file"
						name="file"
						onChange={handleImage}
						style={{ marginLeft: '9.7rem', marginTop: 10 }}
					/>
				</div>
			</Container>
		</div>
	);
}
