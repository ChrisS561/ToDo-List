import { useEffect, useState } from 'react';
import { db } from '../firebase';
import { getDocs, collection } from 'firebase/firestore';

export default function TasksList() {
	const tempArray: any = [];
	const [data, setUseData] = useState([]);

	// Function to fetch tasks from Firebase
	const getTask = async () => {
		// Reference to the 'test-chris' collection in Firebase
		const ref = collection(db, 'test-chris');
		// Fetch the documents from the collection
		const snapshot = await getDocs(ref);
		// Iterate over each document in the snapshot
		snapshot.forEach((row) => {
			console.log(row.data());
			// Push the document data to the temporary array
			tempArray.push(row.data());
			// Update the state with the temporary array
			setUseData(tempArray);
		});
	};

	// Trigger the getTask function when the component mounts
	useEffect(() => {
		getTask();
	}, []);

	return (
		<div>
			{data.map((task: any) => {
				return <div key={task.id}>{task.name}</div>;
			})}
		</div>
	);
}

//UseEffect
//Updates TasksList so that useState manages our tasks list from the documents we get from Firebase. Then use that state to print the task.name of each task in your TasksList container. (Homework for next week)
