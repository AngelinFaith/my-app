import AddToDo from './Components/AddToDo';
import ToDoList from './Components/ToDoList';
import { useState } from 'react';
import Form from './Form';

function App() {

  const [todos, setToDos]=useState([
    {id: 1, text:'Book Ticket', done: false},
    {id: 2, text:'Wash clothes', done: false},
    {id: 3, text:'Write HW', done: false}
  ]); 


  return (
    <div className="App">
      <h2>To Do List</h2>
      <ToDoList todos={todos} setToDos={setToDos}/>
      <AddToDo setToDos={setToDos}/>
      {/* <Form/> */}
    </div>
  );
}

export default App;
