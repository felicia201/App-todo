import React, { ChangeEvent, FormEvent, useState } from "react";
import { Task, addtask } from "../state/types";
import { connect } from 'react-redux';
import { ADD_TASK } from "../state/actions";
import "./TaskItem.css";

interface TaskFormProps {
  addTask: addtask;
}

export const TaskForm: React.FC<TaskFormProps> = ({ addTask }) => {
    const [newTodos, setNewTodo] = useState<string>("");

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        setNewTodo(e.target.value);
    };

    const handleSubmit = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
        addTask(newTodos);
        setNewTodo("");
    };

    return (
        <form>
            <input type="text" value={newTodos} onChange={handleChange} />
            <button type="submit" onClick={handleSubmit}>
                Add Task
            </button>
        </form>
    );
};