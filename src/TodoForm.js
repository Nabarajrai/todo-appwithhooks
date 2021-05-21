import React, { useState } from "react";
import TextField from "@material-ui/core/TextField";
import useInputState from "./hooks/useInputState";
import Paper from "@material-ui/core/Paper";
const TodoForm = ({ addTodo }) => {
  const [todo, handleChange, reSet] = useInputState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    if (todo) {
      addTodo(todo);
    }
    reSet();
  };
  return (
    <Paper style={{ margin: "1rem 0", padding: "0 1rem" }}>
      <form onSubmit={handleSubmit}>
        <TextField
          label="Add new todo"
          fullWidth
          value={todo}
          onChange={handleChange}
          margin="normal"
        />
      </form>
    </Paper>
  );
};

export default TodoForm;
