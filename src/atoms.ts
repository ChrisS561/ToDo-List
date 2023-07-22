import { atom } from "recoil";
import { TaskRecord } from "./types";

export const tasksAtom = atom<TaskRecord[]>({key: "tasks",
default: []
}); 

export const loginFormAtom = atom({key: "loginForm",
default:{
    email: '',
    password: '',
}})