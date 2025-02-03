import React, { useState } from "react";
import "./TodoPage.css"; // Add your own styles here

function TodoPage() {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState("");
  const [editIndex, setEditIndex] = useState(null);
  const [editValue, setEditValue] = useState("");

  const addTask = () => {
    if (newTask.trim()) {
      setTasks([...tasks, newTask]);
      setNewTask("");
    }
  };

  const deleteTask = (index) => {
    setTasks(tasks.filter((_, i) => i !== index));
  };

  const startEdit = (index) => {
    setEditIndex(index);
    setEditValue(tasks[index]);
  };

  const saveEdit = () => {
    if (editValue.trim()) {
      tasks[editIndex] = editValue;
      setTasks([...tasks]);
      setEditIndex(null);
      setEditValue("");
    }
  };

  return (
    <div className="todo-container">
      <h1 className="todo-title">To-Do List</h1>

      <div className="todo-input-section">
        <input
          type="text"
          value={newTask}
          onChange={(e) => setNewTask(e.target.value)}
          placeholder="Enter a task..."
          className="todo-input"
        />
        <button onClick={addTask} className="todo-btn">
          Add Task
        </button>
      </div>

      <ul className="todo-list">
        {tasks.length === 0 ? (
          <p>No tasks available</p>
        ) : (
          tasks.map((task, index) => (
            <li key={index} className="todo-item">
              {editIndex === index ? (
                <>
                  <input
                    type="text"
                    value={editValue}
                    onChange={(e) => setEditValue(e.target.value)}
                    className="edit-input"
                  />
                  <button onClick={saveEdit} className="save-btn">
                    Save
                  </button>
                </>
              ) : (
                <>
                  {task}
                  <div className="todo-actions">
                    <button
                      onClick={() => startEdit(index)}
                      className="edit-btn"
                    >
                      Edit
                    </button>
                    <button
                      onClick={() => deleteTask(index)}
                      className="delete-btn"
                    >
                      Delete
                    </button>
                  </div>
                </>
              )}
            </li>
          ))
        )}
      </ul>
    </div>
  );
}

export default TodoPage;
