import { useEffect, useState } from 'react';
import { db } from '../firebase';
import { getDocs, collection } from 'firebase/firestore';
import { Task } from '../types';
import { TaskRecord } from '../types';
import TaskCard from './TaskCard';

export default function TasksList() {
	const tempArray: TaskRecord[] = [];
	const [tasks, setTasks] = useState<TaskRecord[]>([]);

	// Function to fetch tasks from Firebase
	const getTask = async () => {
		// Reference to the 'test-chris' collection in Firebase
		const ref = collection(db, 'test-chris');
		// Fetch the documents from the collection
		const snapshot = await getDocs(ref);
		// Iterate over each document in the snapshot
		snapshot.forEach((row) => {
			// Push the document data to the temporary array
			tempArray.push({
				id: row.id,
				author: row.data()?.author ?? '',
				name: row.data()?.name ?? '',
				description: row.data()?.description ?? '',
				dueDate: row.data()?.dueDate ?? '',
				priority: row.data()?.priority ?? '',
				complete: row.data()?.complete ?? '',
			});
			// Update the state with the temporary array
			setTasks(tempArray);
		});
	};

	// useEffect hook to fetch tasks
	useEffect(() => {
		getTask();
	}, []);

	return (
		<div>
			{/* Map over the data array and render each task */}
			{tasks.map((task) => (
				<TaskCard key={task.id} task={task} />
			))}
		</div>
	);
}

//UseEffect
//Updates TasksList so that useState manages our tasks list from the documents we get from Firebase.
//Then use that state to print the task.name of each task in your TasksList container.
// (Homework for next week)
