import React, { useState } from 'react';
import { TaskRecord } from '../types';
import { doc, updateDoc } from 'firebase/firestore';
import { db } from '../firebase';

type Props = {
	task: TaskRecord;
};

export default function TaskCard({ task }: Props) {
	const [complete, setComplete] = useState(task.complete);

	const handleClick = async () => {
		const ref = doc(db, 'test-chris', task.id);
		await updateDoc(ref, { complete: !complete });
		setComplete(!complete);
	};

	return (
		<div className={complete ? 'task-card complete' : 'task-card'}>
			<div className="task-status">
				<button onClick={handleClick}>
					{complete ? 'Mark Incomplete' : 'Mark'}
				</button>
			</div>
			<div className="task-name-description">
				<div className="task-name">{task.name}</div>
				<div className="task-description">{task.description}</div>
			</div>
			<div className="task-author">
				<b>Owner:</b> {task.author}
			</div>
			<div className="task-priority">
				<b>Priority:</b> {task.priority}
			</div>
			<div className="task-dueDate" >
				<b>Due:</b> {task.dueDate}
			</div>
		</div>
	);
}
