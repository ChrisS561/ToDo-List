import React, { useEffect } from 'react';
import { useState } from 'react';
import LoginContainer from './components/LoginContainer';
import TasksContainer from './components/TasksContainer';
import { RecoilRoot } from 'recoil';
import useBootstrapEffect from './Hooks/useBootstrapEffect';
import ProfileContainer from './components/ProfileContainer';
import { Routes, Route, BrowserRouter } from 'react-router-dom';


function AppBootstrap() {
	const [isLoggedIn, setIsLoggedIn] = useState(false);
	const loggedInStatus = localStorage.getItem('loggedInStatus'); // Retrieve the loggedInStatus from local storage
	const [loggedInPage, setLoggedInPage] = useState('Profile');

	useBootstrapEffect();

	useEffect(() => {
		if (loggedInStatus === 'loggedIn') {
			setIsLoggedIn(true);
		} else {
			setIsLoggedIn(false);
		}
	}, [loggedInStatus]);

	return (
		<BrowserRouter>
			<Routes>
				<Route
					path="/"
					element={<LoginContainer setIsLoggedIn={setIsLoggedIn} />}
				/>
				<Route
					path="/tasks"
					element={<TasksContainer setIsLoggedIn={setIsLoggedIn} />}
				/>
				<Route
					path="/profile"
					element={<ProfileContainer setIsLoggedIn={setIsLoggedIn} />}
				/>
			</Routes>
		</BrowserRouter>

		// <div>
		// 	{!isLoggedIn && <LoginContainer setIsLoggedIn={setIsLoggedIn} />}
		// 	{isLoggedIn &&  <TasksContainer setIsLoggedIn={setIsLoggedIn} />}
		// 	{isLoggedIn && loggedInPage === "Profile" && <ProfileContainer/>}
		// </div>
	);
}

export default AppBootstrap;
