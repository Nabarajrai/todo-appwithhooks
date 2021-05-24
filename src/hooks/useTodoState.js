import { v4 as uuidv4 } from "uuid";
import useLocalStorage from "./useLocalStorage";
const useTodoState = (initialVal) => {
  const [todos, setTodos] = useLocalStorage("todo ", initialVal);
  return {
    todos,
    addTodo: (newTaskTodo) => {
      setTodos([
        ...todos,
        { id: uuidv4(), task: newTaskTodo, completed: false },
      ]);
    },
    removeTodo: (todoId) => {
      const updateTodo = todos.filter((todos) => todos.id !== todoId);
      setTodos(updateTodo);
    },
    handleToggle: (todoId) => {
      const updateTodos = todos.map((todos) =>
        todos.id === todoId ? { ...todos, completed: !todos.completed } : todos
      );
      setTodos(updateTodos);
    },
    editTodo: (todoId, newTask) => {
      const updateTodos = todos.map((todos) =>
        todos.id === todoId ? { ...todos, task: newTask } : todos
      );
      setTodos(updateTodos);
    },
  };
};

export default useTodoState;
