import React from "react";
import List from "@material-ui/core/List";
import Paper from "@material-ui/core/Paper";
import Divider from "@material-ui/core/Divider";
import Todo from "./Todo";

const TodoList = ({ value, removeTodo, handleToggle, handleEdit }) => {
  const todos = value.map((todo, i) => (
    <div>
      <Todo
        {...todo}
        key={todo.id}
        removeTodo={removeTodo}
        todo={todo.task}
        handleToggle={handleToggle}
        handleEdit={handleEdit}
      />
      {i < value.length - 1 && <Divider />}
    </div>
  ));
  if (value.length)
    return (
      <Paper>
        <List>{todos}</List>
      </Paper>
    );
  return null;
};

export default TodoList;
