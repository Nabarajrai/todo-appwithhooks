import React, { useState } from "react";
import TextField from "@material-ui/core/TextField";
import useInputState from "./hooks/useInputState";
import Paper from "@material-ui/core/Paper";
const TodoForm = ({ addTodo }) => {
  const [value, handleChange, reSet] = useInputState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    if (value) {
      addTodo(value);
    }
    reSet();
  };
  return (
    <Paper style={{ margin: "1rem 0", padding: "0 1rem" }}>
      <form onSubmit={handleSubmit}>
        <TextField
          label="Add new todo"
          fullWidth
          value={value}
          onChange={handleChange}
          margin="normal"
        />
      </form>
    </Paper>
  );
};

export default TodoForm;
