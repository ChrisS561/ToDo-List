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
			<button onClick={handleLogout}>Logout</button>
		</nav>
	);
}
