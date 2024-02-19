import { TaskActionTypes } from './actions';
import { Task } from './types';
import { combineReducers } from 'redux';

const initialState: Task[] = [];

const taskReducer = (state = initialState, action: TaskActionTypes): Task[] => {
  switch (action.type) {
    case 'ADD_TASK':
      return [...state, action.payload];
    case 'TOGGLE_TASK':
      return state.map((task) =>
        task.id === action.payload ? { ...task, complete: !task.complete } : task
      );
    case 'UPDATE_TASK':
      return state.map((task) =>
        task.id === action.payload.id ? { ...task, text: action.payload.newText } : task
      );
    case 'DELETE_TASK':
      return state.filter((task) => task.id !== action.payload);
    default:
      return state;
  }
};

export default taskReducer;
