import NavBar from './NavBar';
import NewTask from './NewTask';

type Props = {
	setIsLoggedIn: (value: boolean) => void;
};

const TasksContainer = ({ setIsLoggedIn }: Props) => {
	return (
		<div>
			<NavBar setIsLoggedIn={setIsLoggedIn} />
			<div className="task-contatiner">
				<h1>To Do Items</h1>
				<NewTask />
			</div>
		</div>
	);
};

export default TasksContainer;
