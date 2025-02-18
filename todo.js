

import React, { useState } from "react";

function TodoApp() {
  const [todos, setTodos] = useState([]); // Array of todo objects
  const [task, setTask] = useState(""); // Current input value
  const [editingId, setEditingId] = useState(null); // Id of the task being edited
  const [editingText, setEditingText] = useState(""); // Text of the task being edited

  // Add a new todo
  const addTodo = () => {
    if (!task.trim()) return; // Prevent adding empty tasks
    const newTodo = { id: Date.now(), text: task }; // Create a new todo object
    setTodos([...todos, newTodo]); // Add it to the array
    setTask(""); // Clear the input field
  };

  // Delete a todo
  const deleteTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id)); // Remove the todo by its id
  };

  // Start editing a todo
  const startEdit = (id, text) => {
    setEditingId(id);
    setEditingText(text);
  };

  // Save the updated todo
  const saveEdit = () => {
    setTodos(
      todos.map((todo) =>
        todo.id === editingId ? { ...todo, text: editingText } : todo
      )
    );
    setEditingId(null); // Exit editing mode
    setEditingText(""); // Clear the editing input
  };

  return (
    <div style={{ padding: "20px", maxWidth: "400px", margin: "auto" }}>
      <h2>React To-Do App</h2>

      {/* Input for adding tasks */}
      <input
        type="text"
        value={task}
        onChange={(e) => setTask(e.target.value)}
        placeholder="Enter a new task"
        style={{ width: "70%", padding: "8px", marginBottom: "10px" }}
      />
      <button onClick={addTodo} style={{ padding: "8px 15px" }}>
        Add
      </button>

      <ul style={{ listStyleType: "none", padding: 0 }}>
        {todos.map((todo) => (
          <li
            key={todo.id}
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              marginBottom: "10px",
              padding: "10px",
              border: "1px solid #ccc",
              borderRadius: "5px",
            }}
          >
            {editingId === todo.id ? (
              // Editing mode
              <input
                type="text"
                value={editingText}
                onChange={(e) => setEditingText(e.target.value)}
                style={{ flexGrow: 1, marginRight: "10px", padding: "5px" }}
              />
            ) : (
              <span>{todo.text}</span>
            )}

            <div>
              {editingId === todo.id ? (
                <>
                  <button
                    onClick={saveEdit}
                    style={{ marginRight: "5px", padding: "5px 10px" }}
                  >
                    Save
                  </button>
                  <button
                    onClick={() => setEditingId(null)}
                    style={{ padding: "5px 10px" }}
                  >
                    Cancel
                  </button>
                </>
              ) : (
                <>
                  <button
                    onClick={() => startEdit(todo.id, todo.text)}
                    style={{ marginRight: "5px", padding: "5px 10px" }}
                  >
                    Edit
                  </button>
                  <button
                    onClick={() => deleteTodo(todo.id)}
                    style={{ padding: "5px 10px" }}
                  >
                    Delete
                  </button>
                </>
              )}
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TodoApp;


export function App(props) {
  return (
    <div className='App'>
      <h1>Hello React.</h1>
      <TodoApp/>
    </div>
  );
}

// Log to console
console.log('Hello console')