import { ChangeEvent, useState } from 'react';
import Textfield from './Textfield';
import { db } from '../firebase';
import { addDoc, collection } from 'firebase/firestore';
import TasksList from './TasksList';

type Task = {
	author: string;
	name: string;
	description: string;
	dueDate: string;
	priority: 'Low' | 'Medium' | 'High';
	complete: boolean;
};

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

	// Event handler for text input changes
	const handleTextChange = (event: ChangeEvent<HTMLInputElement>) => {
		setNewTaskForm({ ...newTaskForm, [event.target.name]: event.target.value });
	};

	// Event handler for form submission
	const handleSubmit = () => {
		const ref = collection(db,"test-chris")
		addDoc(ref,newTaskForm)
		
	};

	return (
		<div className="new-task-box">
			<h2>Create New task</h2>
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
			<TasksList/>
		</div>
	);
}
