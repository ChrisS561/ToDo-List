import { useRecoilState, useSetRecoilState } from "recoil";
import { TaskRecord } from "../types";
import { tasksAtom } from "../atoms";
import { useEffect, useState } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../firebase";


const useBootstrapEffect = () => { 
	//const [tasks, setTasks] = useRecoilState(tasksAtom)
    const setTasks = useSetRecoilState(tasksAtom)
	const [resetTasks, setResetTasks] = useState(false);
  


	// useEffect hook to fetch tasks
	useEffect(() => {
        const tempArray: TaskRecord[] = [];
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
        
            });
             // Update the state with the temporary array
             setTasks(tempArray);
        };
		getTask();
	}, [resetTasks, setTasks]);

}

export default useBootstrapEffect; 