import React, { useContext } from "react";
import TextField from "@material-ui/core/TextField";
import useInputState from "./hooks/useInputState";
import { DispatchContext } from "./contexts/todos.contex";

const EditTodo = ({ id, task, toggle }) => {
  const dispatch = useContext(DispatchContext);
  const [value, handleChange, reSet] = useInputState(task);
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch({ type: "edit", id: id, newTask: value });
    reSet();
    toggle();
  };
  return (
    <form onSubmit={handleSubmit} style={{ marginLeft: "1rem", width: "60%" }}>
      <TextField
        value={value}
        onChange={handleChange}
        margin="normal"
        fullWidth
        autoFocus
      />
    </form>
  );
};

export default EditTodo;
