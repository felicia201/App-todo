
import React, { useState } from "react";
import { TaskList } from "./components/TaskList";
import { Task, ToggleTodo } from "./state/types";
import { TaskForm } from "./components/TaskForm";
import "./style/style.css"; 

const initialTodos: Array<Task> = [
  { id: 1, text: "walk the dog", complete: true },
  { id: 2, text: "Write app", complete: false },
];

const App: React.FC = () => {
   const [todos, setTodos] = useState<Array<Task>>(initialTodos);

  const toggleTodo: ToggleTodo = (selectedTodo: Task) => {
    const newTodos = todos.map((todo) =>
      todo.id === selectedTodo.id ? { ...todo, complete: !todo.complete } : todo
    );
    setTodos(newTodos);
  };

  const deleteTodo = (taskId: number) => {
    const newTodos = todos.filter((todo) => todo.id !== taskId);
    setTodos(newTodos);
  };

  const updateTodo = (taskId: number, newText: string) => {
    const newTodos = todos.map((todo) =>
      todo.id === taskId ? { ...todo, text: newText } : todo
    );
    setTodos(newTodos);
  };

  const addtask = (newtodo: string) => {
    newtodo.trim() !== "" &&
      setTodos([...todos, { id: todos.length + 1, text: newtodo, complete: false }]);
  };

  return (
    <div className="container">
      <header>
        <h1>
          Todo List
          <span>Get things done, one item at a time.</span>
        </h1>
      </header>
      <React.Fragment>
        <TaskList tasks={todos} toggleTodo={toggleTodo} updateTodo={updateTodo} deleteTodo={deleteTodo} />
        <TaskForm addTask={addtask} />
      </React.Fragment>
    </div>
  );
};

export default App;
