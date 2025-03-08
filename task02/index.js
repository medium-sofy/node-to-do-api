import express from 'express'
const app = express();
const port = 4000;

app.use(express.json());

import {
  createToDo,
  indexToDo,
  showToDo,
  updateToDo,
  deleteToDo
} from './utils/helpers.js'
// Implement the following API endpoints:
// ○  POST /todos - Create a new todo (default status: "in-progress")
// ○  GET /todos - List all todos
// ○  GET /todos/:id - Get a single todo by ID
// ○  PUT /todos/:id - Update a todo (modify title or status)
// ○  DELETE /todos/:id - Delete a todo


app.get("/", (req, res) => {
  res.send("<h1>Welcome to our todo list app!</h1>");
});

// POST /todos - Create a new todo (default status: "in-progress")
app.post("/todos", (req, res) => {
  createToDo(req.body);
  console.log("ToDo posted successfully!");
});

// GET /todos - List all todos
app.get("/todos", (req, res) => {
  const data = indexToDo();
  res.send(data);
});

// GET /todos/:id - Get a single todo by ID
app.get("/todos/:id", (req, res) => {
  const id = req.params.id
  res.send(showToDo(id))
});

// PUT /todos/:id - Update a todo (modify title or status)
app.put("/todos/:id", (req, res) => {
  const id = req.params.id;
  console.log(req.body);
  updateToDo(id, req.body);
  const data = indexToDo();
  res.send(data);
});

// DELETE /todos/:id - Delete a todo
app.delete("/todos/:id", (req, res) => {
  const id = req.params.id;
  deleteToDo(id);
  const data = indexToDo();
  res.send(data);
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
