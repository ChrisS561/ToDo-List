import TaskCard from './TaskCard';
import { useRecoilValue } from 'recoil';
import { tasksAtom } from '../atoms';

export default function TasksList() {
	const tasks = useRecoilValue(tasksAtom);

	return (
		<div>
			{/* Map over the data array and render each task */}
			{tasks.map((task) => (
				<TaskCard key={task.id} task={task} />
			))}
		</div>
	);
}
