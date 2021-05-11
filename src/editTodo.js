import React from "react";
import TextField from "@material-ui/core/TextField";
import useInputState from "./hooks/useInputState";

const EditTodo = ({ handleEdit, id, task, toggle }) => {
  const [value, handleChange, reSet] = useInputState(task);
  const handleSubmit = (e) => {
    e.preventDefault();
    handleEdit(id, value);
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
