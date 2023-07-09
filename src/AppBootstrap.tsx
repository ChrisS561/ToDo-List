import React, { useEffect } from 'react';
import { useState } from 'react';
import LoginContainer from './components/LoginContainer';
import TasksContainer from './components/TasksContainer';
import { RecoilRoot } from 'recoil';
import useBootstrapEffect from './Hooks/useBootstrapEffect';

function AppBootstrap() {
	const [isLoggedIn, setIsLoggedIn] = useState(false);
	const loggedInStatus = localStorage.getItem('loggedInStatus'); // Retrieve the loggedInStatus from local storage

	useEffect(() => {
		if (loggedInStatus === 'loggedIn') {
			setIsLoggedIn(true);
		} else {
			setIsLoggedIn(false);
		}
	}, [loggedInStatus]);

	return (
			<div>
				{!isLoggedIn && <LoginContainer setIsLoggedIn={setIsLoggedIn} />}
				{isLoggedIn && <TasksContainer setIsLoggedIn={setIsLoggedIn} />}
			</div>
	);
}

export default AppBootstrap;
