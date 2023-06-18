import { ChangeEvent, useState } from 'react';
import Textfield from './Textfield';

type Task = {
	author: string;
	name: string;
	description: string;
	dueDate: string;
	priority: 'Low' | 'Medium' | 'High';
	complete: boolean;
};

export default function NewTask() {
	const [newTaskForm, setNewTaskForm] = useState<Task>({
		author: '',
		name: '',
		description: '',
		dueDate: '',
		priority: 'Medium',
		complete: false,
	});

	const handleTextChange = (event: ChangeEvent<HTMLInputElement>) => {
		setNewTaskForm({ ...newTaskForm, [event.target.name]: event.target.value });
	};

	const handleSubmit = () => {
		console.log(newTaskForm);
		// Handle form submission
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
			
					<button className="submit-button"onClick={handleSubmit}>Create Task</button>
                    
				</div>
			</div>
	);
}
