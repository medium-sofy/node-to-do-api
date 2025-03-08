import fs from 'fs'

const createToDo = (todo) => {
  const dataString = fs.readFileSync("./db.json", { encoding: "utf-8" });
  const data = JSON.parse(dataString);
  data.push(todo);
  fs.writeFileSync("./db.json", JSON.stringify(data, null, 2));
};

const indexToDo = () => {
  const data = fs.readFileSync("./db.json", { encoding: "utf-8" });
  return JSON.parse(data);
};

const showToDo = (id) => {
  const dataString = fs.readFileSync("./db.json", { encoding: "utf-8" });
  const data = JSON.parse(dataString);
  return data.filter((item) => item.id == id);
};

const updateToDo = (id, todo) => {

  const dataString = fs.readFileSync("./db.json", { encoding: "utf-8" });
  const data = JSON.parse(dataString);
  // loop through data array and compare ids
  // till you find the desired item
  const item = data.filter((item) => item.id == id)[0]; // the filter() returns the result as an array that contains a single object, with the [0] we are targeting that object
  item.title = todo.title ?? item.title;
  item.status = todo.status ?? item.status;
  data[id - 1] = item;
  fs.writeFileSync("./db.json", JSON.stringify(data));
};

const deleteToDo = (id) => {

  const dataString = fs.readFileSync("./db.json", { encoding: "utf-8" });
  let data = JSON.parse(dataString);
  const filteredData = data.filter((item) => item.id != id);
  fs.writeFileSync("./db.json", JSON.stringify(filteredData));
};

export{createToDo, indexToDo, showToDo, updateToDo, deleteToDo}