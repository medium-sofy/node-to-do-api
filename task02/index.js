const express = require("express");
const fs = require("fs");
const app = express();
const port = 4000;

app.use(express.json());

// Implement the following API endpoints:
// ○  POST /todos - Create a new todo (default status: "in-progress")
// ○  GET /todos - List all todos
// ○  GET /todos/:id - Get a single todo by ID
// ○  PUT /todos/:id - Update a todo (modify title or status)
// ○  DELETE /todos/:id - Delete a todo

const writeToDo = (todo) => {
  const dataString = fs.readFileSync("./db.json", { encoding: "utf-8" });
  const data = JSON.parse(dataString);
  data.push(todo);
  fs.writeFileSync("./db.json", JSON.stringify(data, null, 2));
  // console.log(data);
};

// writeToDo({ id: 2, title: "Get Groceries", status: "In-progress" });

const readToDos = () => {
  const data = fs.readFileSync("./db.json", { encoding: "utf-8" });
  return JSON.parse(data)
};

const updateToDo = (id, data) => {

};

const deleteToDo = (id) => {};

app.get("/", (req, res) => {
  res.send("<h1>Welcome to our todo list app!</h1>");
});

// POST /todos - Create a new todo (default status: "in-progress")
app.post("/todos", (req, res) => {
  writeToDo(req.body)
  console.log('ToDo posted successfully!')
});

// GET /todos - List all todos
app.get("/todos", (req, res) => {
  const data = readToDos()
  res.send(data)
});

// GET /todos/:id - Get a single todo by ID
app.get("/todos/:id", (req, res) => {});

// PUT /todos/:id - Update a todo (modify title or status)
app.put("/todos/:id", (req, res) => {});

// DELETE /todos/:id - Delete a todo
app.delete("/todos/:id", (req, res) => {});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
