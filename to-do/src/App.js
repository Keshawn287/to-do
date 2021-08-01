//import logo from './logo.svg';
import React,{ useState } from 'react';
import './App.css';
import TodoForm from './components/TodoForm'; //pass as a prop

function App() {

  const [todos, setTodos] = useState([]);

  //takes in todo and adds it to an array of todos
  function addTodo(todo){
    setTodos([todo, ...todos]);
  }

  return (
    <div className="App">
      <header className="App-header">
        <p>React Todo</p>
        <TodoForm addTodo={addTodo} />
      </header>
    </div>
  );
}

export default App;
