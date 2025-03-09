# Todo API

This is a simple Todo API built with Node.js and Express.

## Prerequisites

* Node.js 
* npm 

## Installation

1.  Navigate to the project directory in your terminal.
2.  Run `npm install` to install the dependencies.

## Running the API

1.  Run `npm start` to start the server.
2.  The API will be running on `http://localhost:4000`.

## API Endpoints

* **POST /todos**
    * Creates a new todo.
    * Request body: `{ "id": number, "title": string, "status": string }`
    * Example Request Body: `{"id": 1, "title": "Buy groceries"}`
* **GET /todos**
    * Lists all todos.
* **GET /todos/:id**
    * Gets a single todo by ID.
    * Example: `GET /todos/1`
* **PUT /todos/:id**
    * Updates a todo (modify title or status).
    * Request body: `{ "title": string (optional), "status": string (optional) }`
    * Example Request Body: `{"title": "Updated title", "status": "completed"}`
* **DELETE /todos/:id**
    * Deletes a todo.
    * Example: `DELETE /todos/1`

## Testing the Endpoints

You can use tools like `curl`, Postman, or Thunderclient to test the API endpoints.

**Example using `curl`:**

* **Create a new todo:**

    ```bash
    curl -X POST -H "Content-Type: application/json" -d '{"id": 1, "title": "Buy groceries"}' http://localhost:4000/todos
    ```

* **List all todos:**

    ```bash
    curl http://localhost:4000/todos
    ```

* **Get a single todo:**

    ```bash
    curl http://localhost:4000/todos/1
    ```

* **Update a todo:**

    ```bash
    curl -X PUT -H "Content-Type: application/json" -d '{"title": "Updated groceries"}' http://localhost:4000/todos/1
    ```

* **Delete a todo:**

    ```bash
    curl -X DELETE http://localhost:4000/todos/1
    ```
