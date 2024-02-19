import React from "react";
import { Task, ToggleTodo } from "../state/types";
import { TaskItem } from "./TaskItem";

interface TaskListProps {
  tasks: Task[];
  toggleTodo: ToggleTodo;
  updateTodo: (taskId: number, newText: string) => void;
  deleteTodo: (taskId: number) => void; 
}

export const TaskList: React.FC<TaskListProps> = ({ tasks, toggleTodo, updateTodo, deleteTodo }) => {
  return (
    <ul>
      {tasks.map((task) => (
        <TaskItem
          key={task.id}
          task={task}
          toggleTodo={toggleTodo}
          updateTodo={updateTodo}
          deleteTodo={deleteTodo}
        />
      ))}
    </ul>
  );
};
