
import React, { createContext, useContext, ReactNode, ReactElement } from 'react';
import { Task } from './state/types';


interface StateContextProps {
  todos: Task[];
  setTodos: React.Dispatch<React.SetStateAction<Task[]>>;
}

const StateContext = createContext<StateContextProps | undefined>(undefined);

interface StateProviderProps {
  children: ReactNode;
}

export const StateProvider: React.FC<StateProviderProps> = ({ children }: StateProviderProps): ReactElement => {
  const [todos, setTodos] = React.useState<Array<Task>>([]);

  return (
    <StateContext.Provider value={{ todos, setTodos }}>
      {children}
    </StateContext.Provider>
  );
};

export const useStateContext = (): StateContextProps => {
  const context = useContext(StateContext);
  if (!context) {
    throw new Error('useStateContext doit être utilisé dans un StateProvider');
  }
  return context;
};
