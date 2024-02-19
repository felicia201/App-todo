
export type Task = {
   id: number;
  text: string;
  complete:boolean;
};
export type ToggleTodo = (selectedTodo: Task) => void;

export type addtask = (newTodo:string) =>void;