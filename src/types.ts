export type Task = {
    id?: string
	author: string;
	name: string;
	description: string;
	dueDate: string;
	priority: 'Low' | 'Medium' | 'High';
	complete: boolean;
};

export type TaskRecord = Task & { id: string}