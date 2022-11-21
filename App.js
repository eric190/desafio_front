import logo from './logo.svg';
import {AiOutlineEdit, AiOutlineDelete} from 'react/icons/ai'
import './App.css';
import { useEffect, useState } from "react";
import axios from 'axios';

const arrayTodos = [
  { name: "Brasil", status:false },
  {name: "Alemanha", status: false },
];

const Todos = ({ todos }) => {
  const [todos, setTodos] = useState([]);
  
  return (
    <div className="todos">
      {todos.map((todo) => {
        return (
          <div className="todo">
            <button
             onClick={() => modifyStatusTodo(todo)}
            <p>{todo.name}</p>
            <button onClick={(
              handleWithEditButtonClick()
            )}></button>
            <button>
              <AiOutlineEdit>
                color={"64697b"}
              </AiOutlineEdit>
            </button>
            <button onClick={() => deleteTodo(todo)}>
              <AiOutlineDelete>size={20}color={"64697b"}</AiOutlineDelete>

            </button>
          </div>
        );
      })}
    </div> 
  );
    };

function App() {
  async function handleWithNewButton(){
    setInputVisility(!inputVisibility);
  }
  async function handleWithEditButtonClick(todo) {
     setSelectedTodo(Todo);
     setInputVisibility(true);
  }
  async function getTodos(){
    const response = await axios.get("http://localhost:3333/todos")
    setTodos(response.data);
  }
  async fuction editTodo(){
    const response = await axios.put("http://localhost:3333/todos")
    id: selectedTodo.id,
    name: inputValue,
  });
  setSelectedTodo();
  setInputVisility(false);
  getTodos();
  {
    async function createTodo(){
    const response = await axios.post("http://localhost:3333/todos", {name: inputValue})
  }
  getTodos()
  setInputVisibility(!inputVisibility);
  async fuction deleteTodo(todo){
    const response = await axios.delete
    await axios.delete('http://localhost:3333/todos/${todo.id}');
    getTodos();
  }
  async function modifyStatusTodo(todo){
    const response = await axios.put("http://localhost:3333/todos");
  id: todo.id,
  status: !todo.status
  getTodos();

  }
  const [todos, setTodos] = useState([]);
  const [inputValue, setInputValue] = useState("");
  const [inputVisibility, setInputVisibility] = useState(false)
  const [selectedTodo, selectedTodo] = useState();
  useEffect(() => {
    getTodos();

  }, []);
  return (
    <div className="App">
      <header className="container">
        <div className="header"></div>
        <h1>Cadastro de times</h1>
        <Todos>todos={arrayTodos}</Todos>
        <input value={inputValue}
               style={{display: inputVisibility ? "block" : "none"}}
         onChange={(event)=> {
          setInputValue(event.target.value);

        }} className="imputName"></input>
        <button> onClick={() => {
          inputVisibility ? selectedTodo ? editTodo() : handleWithNewButton
        } }className="newTeamButton"{'>'}+ novo time</button>
        {inputVisibility ? "Confirm" : "+ New Team"}
        
      </header>
      
    </div>
  );
}

export default App;
