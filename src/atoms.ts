import { atom } from "recoil";
import { TaskRecord } from "./types";

export const tasksAtom = atom<TaskRecord[]>({key: "tasks",
default: []
}); 