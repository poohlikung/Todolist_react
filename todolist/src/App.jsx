import { useState, useEffect } from "react";
import "./App.css";
import axios from "axios";
import {Link} from 'react-router-dom'

function App() {
  const [todos, setTodos] = useState([]);
  const baseURL = 'https://6a9463640e895b145e5f6c44.mockapi.io/todos'
  async function fetchTodo() {
    try {
      const response = await axios.get(
        baseURL
      );
      setTodos(response.data);
    } catch (error) {
      console.log("error", error);
    }
  }

  async function deleteTodo(id) {
    try {
      await axios.delete(`${baseURL}/${id}`);
      setTodos((prevTodos) => prevTodos.filter((todo) => todo.id !== id));
    } catch (error) {
      console.log("error", error);
    }
  }

  useEffect(() => {
    fetchTodo();
  }, []);

  return (
    <>
      {todos.map((todo) => (
        <div key={todo.id}>
          {todo.id} {todo.name} {todo.status}
          
          <Link to={`/todo/${todo.id}`}>
          <button>Edit</button>
          </Link>



          <button onClick={() => deleteTodo(todo.id)}>Delete</button>
        </div>
      ))}
    </>
  );
}

export default App;
