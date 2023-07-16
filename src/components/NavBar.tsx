import { Link } from "react-router-dom";

type Props = {
	setIsLoggedIn: (value: boolean) => void;
};

export default function NavBar({ setIsLoggedIn }: Props) {
	const handleLogout = () => {
		setIsLoggedIn(false);
		localStorage.setItem('loggedInStatus', 'notLoggedIn');
	};

	return (
		<nav>
			<Link to={'/tasks'} style={{marginRight: "1rem"}}>Task</Link>
			<Link to={'/profile'}>Profile</Link>
			<button onClick={handleLogout}>Logout</button>
		</nav>
	);
}
