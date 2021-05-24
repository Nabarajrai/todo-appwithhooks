import React, { createContext } from "react";
import { useLocalStorageReducer } from "../hooks/useLocalStorage";
import todoReducer from "../reducer/todo.reducer";
export const TodosContext = createContext();
export const DispatchContext = createContext();
const defalultTodos = [{ id: 1, task: "todo work app", completed: false }];
export const TodosProvider = ({ children }) => {
  const [todos, dispatch] = useLocalStorageReducer(
    "todo",
    defalultTodos,
    todoReducer
  );
  return (
    <TodosContext.Provider value={todos}>
      <DispatchContext.Provider value={dispatch}>
        {children}
      </DispatchContext.Provider>
    </TodosContext.Provider>
  );
};
