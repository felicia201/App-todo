import React, { useState } from "react";
import { Task, ToggleTodo } from "../state/types";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash, faEdit, faCheck } from '@fortawesome/free-solid-svg-icons';
import "./TaskItem.css";

interface TaskItemProps {
  task: Task;
  toggleTodo: ToggleTodo;
  updateTodo: (taskId: number, newText: string) => void;
  deleteTodo: (taskId: number) => void;
}

export const TaskItem: React.FC<TaskItemProps> = ({ task, toggleTodo, updateTodo, deleteTodo }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [newText, setNewText] = useState(task.text);

  const handleToggleEditing = () => {
    setIsEditing(!isEditing);
    if (!isEditing) {
      setNewText(task.text); // Réinitialiser le texte lors du passage en mode édition
    }
  };

  const handleUpdate = () => {
    if (newText.trim() !== "") {
      updateTodo(task.id, newText);
      setIsEditing(false);
    }
  };

  return (
    <li>
      <div className="label-container">
        {isEditing ? (
          <input
            type="text"
            value={newText}
            onChange={(e) => setNewText(e.target.value)}
          />
        ) : (
          <label className={task.complete ? "complete" : undefined}>
            <input
              type="checkbox"
              checked={task.complete}
              onChange={() => toggleTodo(task)}
            />
            {task.text}
          </label>
        )}
        <button onClick={isEditing ? handleUpdate : handleToggleEditing}>
          {isEditing ? <FontAwesomeIcon icon={faCheck} /> : <FontAwesomeIcon icon={faEdit} />}
        </button>
      </div>
      <FontAwesomeIcon icon={faTrash} className="delete-icon" onClick={() => deleteTodo(task.id)} />
    </li>
  );
};
