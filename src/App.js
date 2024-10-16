import { useState } from 'react';
import './App.css';
import TodoList from './Components/TodoList';
import TodoHeader from './Components/TodoHeader';
import TodoFooter from './Components/TodoFooter';

function App() {
  const [todos,setTodos] = useState([
    {
      id:Math.random(),
      text: "Learn JS",
      isCompleted: false
    },
    {
      id:Math.random(),
      text: "Learn CSS",
      isCompleted: false
    },
    {
      id:Math.random(),
      text: "Learn React",
      isCompleted: false
    }
  ])
  return (
    <div className="App">
      <TodoHeader onAdd={(text)=>{
        if (text=="") {
          return 
        }
        setTodos([
          ...todos,
          {
            id:Math.random(),
            text:text,
            isCompleted:false
          }
        ])
      }}
    />
      <TodoList todos={todos} 
      onDelete={(todo)=>{
        setTodos(todos.filter((t)=>t.id!==todo.id))
      }}
      onChange={(newTodo)=>{
        setTodos(todos.map((todo)=>{
          if (todo.id==newTodo.id) {
            return newTodo
          }
          return todo
        }))
      }}
      />
      <TodoFooter todos={todos} onClearCOmpleted={()=>{
        setTodos(todos.filter((todo)=>!todo.isCompleted))
      }}/>
    </div>
  );
}

export default App;
