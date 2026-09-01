import { useParams } from "react-router-dom";
import axios from "axios";
import { useState, useEffect } from "react";
const baseURL = "https://6a9463640e895b145e5f6c44.mockapi.io/todos";
function Edit() {
  const { id } = useParams();
  const [todo, setTodos] = useState({
    name: "",
  });
  async function fetchTodo(todoId) {
    try {
      const response = await axios.get(`${baseURL}/${todoId}`);
      setTodos(response.data);
    } catch (error) {
      console.log("error", error);
    }
  }
  useEffect(() => {
    fetchTodo(id);
  }, [id]);

  function handleNameChange(event) {
    setTodos((previousState) => ({
      ...previousState,
      name: event.target.value,
    }));
  }

  async function updateName() {
    try {
      await axios.put(`${baseURL}/${id}`, {
        name: todo.name,
      });
      alert("แก้ไขข้อมูลสำเร็จ");
    } catch (error) {
      console.log("แก้ไขข้อมูลไม่สำเร็จ", error);
    }
  }

  return (
    <>
      <div>Hello{id}</div>
      <div>{todo.name}</div>
      <div>
        <input
          type="text"
          value={todo.name}
          onChange={handleNameChange}
        ></input>
        {todo.status}
      </div>
      <button onClick={updateName}>Edit</button>
    </>
  );
}
export default Edit;
