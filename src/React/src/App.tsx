import { useState } from "react";
import TextField from "@mui/material/TextField";
import "./App.css";
import { Button, Checkbox, FormControlLabel, FormGroup } from "@mui/material";

type Todo = {
  id: number;
  text: string;
  completed: boolean;
};

function App() {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [newTodo, setNewTodo] = useState<string>("");

  return (
    <div className="App">
      <FormGroup
        style={{
          display: "flex",
          flexDirection: "row",
          gap: "1rem",
        }}
      >
        <Button
          variant="contained"
          onClick={() => {
            const todoNotCompleted = todos.filter(
              (todo) => todo.completed === false
            );
            setTodos([...todoNotCompleted]);
          }}
        >
          Clear selected
        </Button>
        <Button
          variant="contained"
          onClick={() => {
            const newTodos = [...todos];
            newTodos.forEach((todo) => (todo.completed = true));
            setTodos([...newTodos]);
          }}
        >
          Select all
        </Button>
      </FormGroup>
      <FormGroup>
        {todos.length > 0 ? todos.map((todo, index) => (
          <FormControlLabel
            control={
              <Checkbox
                checked={todo.completed}
                onChange={(e) => {
                  const newTodos = [...todos];
                  newTodos[index].completed = e.target.checked;
                  setTodos(newTodos);
                }}
              />
            }
            label={todo.text}
          />
        )): <p>No todos</p>}
      </FormGroup>
      <FormGroup
        style={{
          display: "flex",
          flexDirection: "row",
          gap: "1rem",
          marginTop: "1rem",
        }}
      >
        <TextField
          id="filled-basic"
          label="Filled"
          variant="filled"
          value={newTodo}
          onChange={(e) => {
            setNewTodo(e.target.value);
          }}
        />
        <Button
          variant="contained"
          onClick={() => {
            setTodos([
              ...todos,
              { id: todos.length, text: newTodo, completed: false },
            ]);
            setNewTodo("");
          }}
        >
          Add Todos
        </Button>
      </FormGroup>
    </div>
  );
}

export default App;
