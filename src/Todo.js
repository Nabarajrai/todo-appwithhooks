import React, { useContext, memo } from "react";
import ListItemText from "@material-ui/core/ListItemText";
import ListItem from "@material-ui/core/ListItem";
import CheckBox from "@material-ui/core/Checkbox";
import EditIcon from "@material-ui/icons/Edit";
import DeleteIcon from "@material-ui/icons/Delete";
import ListItemSecondaryAction from "@material-ui/core/ListItemSecondaryAction";
import IconButton from "@material-ui/core/IconButton";
import useToggle from "./hooks/useToggle";
import EditTodo from "./editTodo";
import { DispatchContext } from "./contexts/todos.contex";
const Todo = ({ id, todo, completed }) => {
  const dispatch = useContext(DispatchContext);
  const [isEditing, Toggle] = useToggle();
  console.log("render");
  return (
    <ListItem style={{ height: "64px" }}>
      {isEditing ? (
        <EditTodo id={id} task={todo} toggle={Toggle} />
      ) : (
        <>
          <CheckBox
            tabIndex={-1}
            checked={completed}
            onClick={() => dispatch({ type: "toggle", id: id })}
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
              <DeleteIcon
                onClick={() => dispatch({ type: "remove", id: id })}
                fontSize="small"
              />
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

export default memo(Todo);
