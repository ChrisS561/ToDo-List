import React from "react";
import { useState } from "react";
import LoginContainer from "./LoginContainer";
import TasksContainer from "./TasksContainer";

function App() {
const [isLoggedIn, setIsLoggedIn] = useState(false);
const loggedInStatus = localStorage.getItem("loggedInStatus")
console.log(loggedInStatus)

  return (
		<div>
			{!isLoggedIn && <LoginContainer setIsLoggedIn={setIsLoggedIn} />}
			{isLoggedIn && <TasksContainer />}
		</div>
	);
}

export default App;
