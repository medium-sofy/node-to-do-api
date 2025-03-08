const express = require('express');
const fs = require('fs');
const app = express();
const port = 3000;

app.use(express.json())

// Implement the following API endpoints: 
// ○  POST /todos - Create a new todo (default status: "in-progress") 
// ○  GET /todos - List all todos 
// ○  GET /todos/:id - Get a single todo by ID 
// ○  PUT /todos/:id - Update a todo (modify title or status) 
// ○  DELETE /todos/:id - Delete a todo 


app.get('/',(req,res)=>{
  res.send("<h1>Welcome to our todo list app!</h1>")
})

app.post('/todos',(req,res)=>{

})

app.get('/todos',(req,res)=>{
res.json({"hello":"true"})
})

app.get('/todos/:id',(req,res)=>{

})

app.put('/todos/:id',(req,res)=>{

})

app.delete('/todos/:id',(req,res)=>{

})

app.listen(port,()=>{
  console.log(`Server running on port ${port}`)
})