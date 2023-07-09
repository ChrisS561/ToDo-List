import React, { useEffect } from 'react';
import { useState } from 'react';
import LoginContainer from './components/LoginContainer';
import TasksContainer from './components/TasksContainer';
import { RecoilRoot } from 'recoil';
import useBootstrapEffect from './Hooks/useBootstrapEffect';
import AppBootstrap from './AppBootstrap';

function App() {
	return (
		<RecoilRoot>
			<AppBootstrap/>
		</RecoilRoot>
	);
}

export default App;
