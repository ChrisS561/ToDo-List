import { ChangeEvent, useState } from 'react';
import Textfield from './Textfield';
import { db } from '../firebase';
import { addDoc, collection } from 'firebase/firestore';
import TasksList from './TasksList';
import { Task } from '../types';



export default function NewTask() {
	// State to store the form data
	const [newTaskForm, setNewTaskForm] = useState<Task>({
		author: '',
		name: '',
		description: '',
		dueDate: '',
		priority: 'Medium',
		complete: false,
	});
	const [complete, setComplete] = useState<string | boolean>(false);

	// Event handler for text input changes
	const handleTextChange = (event: ChangeEvent<HTMLInputElement>) => {
		// Update the corresponding field in the form state
		setNewTaskForm({ ...newTaskForm, [event.target.name]: event.target.value });
	};

	// Event handler for form submission
	const handleSubmit = () => {
		// Reference to the 'test-chris' collection in Firebase
		const ref = collection(db, 'test-chris');
		// Add the new task document to the collection
		addDoc(ref, newTaskForm);
		setComplete(true);
		setTimeout(() => {
			setComplete(false);
		},3000);
	};

	return (
		<div className="new-task-box">
			<h2>Create New Task</h2>
			<div className="flex-row">
				<div className="flex-item">
					<Textfield
						label="Author"
						inputType="text"
						handleChange={handleTextChange}
						name="author"
					/>
				</div>
				<div className="flex-item">
					<Textfield
						label="Task Name"
						inputType="text"
						handleChange={handleTextChange}
						name="name"
					/>
				</div>
			</div>
			<div className="flex-row">
				<div className="flex-item">
					<Textfield
						label="Description"
						inputType="text"
						handleChange={handleTextChange}
						name="description"
					/>
				</div>
			</div>
			<div className="flex-row">
				<div className="flex-item">
					<Textfield
						label="Due Date"
						inputType="text"
						handleChange={handleTextChange}
						name="dueDate"
					/>
				</div>
				<div className="flex-item">
					<Textfield
						label="Priority"
						inputType="text"
						handleChange={handleTextChange}
						name="priority"
					/>
				</div>
			</div>
			<div className="flex-row">
				<button className="submit-button" onClick={handleSubmit}>
					Create Task
				</button>
			</div>
			{complete && <div className="task-added">Task Added</div>}
			<TasksList />
		</div>
	);
}
