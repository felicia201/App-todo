import { Task } from './types';

export const ADD_TASK = 'ADD_TASK';
export const TOGGLE_TASK = 'TOGGLE_TASK';
export const UPDATE_TASK = 'UPDATE_TASK';
export const DELETE_TASK = 'DELETE_TASK';

export interface AddTaskAction {
  type: typeof ADD_TASK;
  payload: Task;
}

export interface ToggleTaskAction {
  type: typeof TOGGLE_TASK;
  payload: number;
}

export interface UpdateTaskAction {
  type: typeof UPDATE_TASK;
  payload: { id: number; newText: string };
}

export interface DeleteTaskAction {
  type: typeof DELETE_TASK;
  payload: number;
}

export type TaskActionTypes =
  | AddTaskAction
  | ToggleTaskAction
  | UpdateTaskAction
  | DeleteTaskAction;

export const toggleTask = (taskId: number): ToggleTaskAction => ({
  type: TOGGLE_TASK,
  payload: taskId,
});

export const updateTask = (taskId: number, newText: string): UpdateTaskAction => ({
  type: UPDATE_TASK,
  payload: { id: taskId, newText },
});

export const deleteTask = (taskId: number): DeleteTaskAction => ({
  type: DELETE_TASK,
  payload: taskId,
});
