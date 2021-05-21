import { v4 as uuidv4 } from "uuid";
import useLocalStorage from "./useLocalStorage";
const useTodoState = (initialVal) => {
  const [todo, setTodos] = useLocalStorage("todo ", initialVal);
  return {
    todo,
    addTodo: (newTaskTodo) => {
      setTodos([
        ...todo,
        { id: uuidv4(), task: newTaskTodo, completed: false },
      ]);
    },
    removeTodo: (todoId) => {
      const updateTodo = todo.filter((todos) => todos.id !== todoId);
      setTodos(updateTodo);
    },
    handleToggle: (todoId) => {
      const updateTodos = todo.map((todos) =>
        todos.id === todoId ? { ...todos, completed: !todos.completed } : todos
      );
      setTodos(updateTodos);
    },
    editTodo: (todoId, newTask) => {
      const updateTodos = todo.map((todos) =>
        todos.id === todoId ? { ...todos, task: newTask } : todos
      );
      setTodos(updateTodos);
    },
  };
};

export default useTodoState;
