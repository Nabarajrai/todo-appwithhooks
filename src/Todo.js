import React from "react";
import ListItemText from "@material-ui/core/ListItemText";
import ListItem from "@material-ui/core/ListItem";
import CheckBox from "@material-ui/core/Checkbox";
import EditIcon from "@material-ui/icons/Edit";
import DeleteIcon from "@material-ui/icons/Delete";
import ListItemSecondaryAction from "@material-ui/core/ListItemSecondaryAction";
import IconButton from "@material-ui/core/IconButton";
import useToggle from "./hooks/useToggle";
import EditTodo from "./editTodo";
const Todo = ({
  id,
  todo,
  completed,
  removeTodo,
  handleToggle,
  handleEdit,
}) => {
  const [isEditing, Toggle] = useToggle();
  return (
    <ListItem style={{ height: "64px" }}>
      {isEditing ? (
        <EditTodo handleEdit={handleEdit} id={id} task={todo} toggle={Toggle} />
      ) : (
        <>
          <CheckBox
            tabIndex={-1}
            checked={completed}
            onClick={() => handleToggle(id)}
            size="small"
          />
          <ListItemText
            style={{
              textDecoration: completed ? "line-through" : "none",
            }}
          >
            {todo}
          </ListItemText>
          <ListItemSecondaryAction>
            <IconButton aria-label="Delete">
              <DeleteIcon onClick={() => removeTodo(id)} fontSize="small" />
            </IconButton>
            <IconButton aria-label="Edit">
              <EditIcon fontSize="small" onClick={() => Toggle(id)} />
            </IconButton>
          </ListItemSecondaryAction>
        </>
      )}
    </ListItem>
  );
};

export default Todo;
