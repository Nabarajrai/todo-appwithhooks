import React from "react";
import TodoList from "./TodoList";
import TodoForm from "./TodoForm";
import Paper from "@material-ui/core/Paper";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import { TodosProvider } from "./contexts/todos.contex";

function Todoapp() {
  return (
    <div className="App">
      <Paper
        style={{
          backgroundColor: "#ffff",
          padding: "0",
          margin: "0",
          height: "100vh",
        }}
        elevation={0}
      >
        <AppBar position="static" color="primary" style={{ height: "64px" }}>
          <Toolbar>
            <Typography>Todo with hooks</Typography>
          </Toolbar>
        </AppBar>
        <Grid container justify="center" style={{ marginTop: "1rem" }}>
          <Grid item xs={11} md={8} lg={4}>
            <TodosProvider>
              <TodoForm />
              <TodoList />
            </TodosProvider>
          </Grid>
        </Grid>
      </Paper>
    </div>
  );
}

export default Todoapp;
