import React, { useContext } from "react";
import List from "@material-ui/core/List";
import Paper from "@material-ui/core/Paper";
import Divider from "@material-ui/core/Divider";
import Todo from "./Todo";
import { TodosContext } from "./contexts/todos.contex";

const TodoList = () => {
  const todos = useContext(TodosContext);
  console.log(todos);
  const todoses = todos.map((todo, i) => (
    <div>
      <Todo {...todo} key={todo.id} todo={todo.task} />
      {i < todo.length - 1 && <Divider />}
    </div>
  ));
  if (todos.length)
    return (
      <Paper>
        <List>{todoses}</List>
      </Paper>
    );
  return null;
};

export default TodoList;
