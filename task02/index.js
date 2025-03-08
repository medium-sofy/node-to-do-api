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

const createToDo = (todo) => {
  const dataString = fs.readFileSync("./db.json", { encoding: "utf-8" });
  const data = JSON.parse(dataString);
  data.push(todo);
  fs.writeFileSync("./db.json", JSON.stringify(data, null, 2));
  // console.log(data);
};

const indexToDo = () => {
  const data = fs.readFileSync("./db.json", { encoding: "utf-8" });
  return JSON.parse(data);
};


const updateToDo = (id, todo) => {
  // read data from file as a string
  const dataString = fs.readFileSync("./db.json", { encoding: "utf-8" });
  // convert to an object to traverse & manipulate
  const data = JSON.parse(dataString);
  console.log("The data before updating: ", data);
  // loop through data array and compare ids
  // till you find the desired item
  const item = data.filter((item) => item.id == id)[0]; // the filter() returns the result as an array that contains a single object,
  // with the [0] we are targeting that object

  // update values
  item.title = todo.title ?? item.title;
  item.status = todo.status ?? item.status;
  data[id - 1] = item;
  console.log("the item is: ", item);
  console.log("the data after updating: ", data);
  // write to disk
  fs.writeFileSync("./db.json", JSON.stringify(data));
};

// updateToDo(2, { title: "modified", status: "done" });
const deleteToDo = (id) => {};

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
app.get("/todos/:id", (req, res) => {});

// PUT /todos/:id - Update a todo (modify title or status)
app.put("/todos/:id", (req, res) => {
  const id = req.params.id;
  console.log(req.body);
  updateToDo(id, req.body);
  const data = readToDos();
  res.send(data);
});

// DELETE /todos/:id - Delete a todo
app.delete("/todos/:id", (req, res) => {});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
