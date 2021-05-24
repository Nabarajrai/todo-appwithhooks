import { v4 as uuidv4 } from "uuid";
const reducer = (state, action) => {
  switch (action.type) {
    case "add":
      return [...state, { id: uuidv4(), task: action.task, completed: false }];
    case "remove":
      return state.filter((todos) => todos.id !== action.id);

    case "toggle":
      return state.map((todos) =>
        todos.id === action.id
          ? { ...todos, completed: !todos.completed }
          : todos
      );
    case "edit":
      return state.map((todos) =>
        todos.id === action.id ? { ...todos, task: action.newTask } : todos
      );
    default:
      return state;
  }
};

export default reducer;
