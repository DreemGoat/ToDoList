import AddToDo from "./components/AddToDo";
import StuffToDo from "./components/StuffToDo";
import Name from "./components/Name";
import { useState } from 'react';

function App(){

  const [todo, setTodo] = useState([])

  const getItem = (item) =>{
    setTodo((prevState) =>{
      return [...prevState, item]
    })
  }

  const getCompleted = (id) =>{
    setTodo((prevState) =>{
      return prevState.filter((item, index)=>{
        return index !=id;
      })
    })
  }

  return (
    <div className="todo">
      <Name name ="Daniel" last ="Eric Phangandy" NIM ="2501990312"/>
      <AddToDo item={getItem}/>
      {todo && todo.map((todo, index) =>(
        <StuffToDo id={index} item={todo} completed={getCompleted}/>
      ))}
    </div>
  );

  /*const [list, setList] = useState([]);
  const[input, setInput] = useState("");

  const addTodo = (todo) => {
    const newTodo = {
      id: Math.random(),
      todo: todo
    };

    //add to do to list
    setList([...list, newTodo]);

    //clear input box
    setInput("");
  };

  const deleteTodo = (id) => {
    //filter out todo with id
    const newList = list.filter((todo) => todo.id !== id);

    setList(newList);
  }

  return (
  <div>
    <h3>To Do List by Daniel Eric Phangandy (2501990312)</h3>
    <input Type='text' value={input} 
    onChange={(e) => setInput(e.target.value)} 
    />
    <button onClick={()=>addTodo(input)}>Add</button>
    <ul>
      {list.map((todo) => (
        <li key={todo.id}>
          {todo.todo}
          <button onClick={()=>deleteTodo(todo.id)}>&times;</button>
        </li>
      ))}
    </ul>
  </div>
  )*/
} 

export default App;