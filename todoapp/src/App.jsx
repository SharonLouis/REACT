import { useState,useEffect} from 'react'
import {TodoProvider} from './context'
import TodoInput from './components/TodoInput'
import TodoList from './components/TodoList'

  // App.jsx — Design 3: Soft Dark Card
// CSS-only, no logic. Wire up your own JS.
// Font: import 'Outfit' from Google Fonts in your index.html or index.css

import './App.css';

function App() {
  const [todos,setTodos]=useState([])
  const addTodo=(todo)=>{
    setTodos((prev)=>[...prev,{id : Date.now(),todo, completed : false}])
  }
  const updatedTodo =(id,todo)=>{
    setTodos((prev)=>prev.map((prevTodo )=>(prevTodo.id ===id? todo:prevTodo)))
  }
  const deleteTodo =(id)=>{
    setTodos((prev)=>prev.filter((todo)=> todo.id!==id))
  }
  const toggleComplete =(id)=>{
    setTodos((prev)=>prev.map((prevTodo)=>prevTodo.id=== id?{...prevTodo,completed:!prevTodo.completed}:prevTodo))
  }
  useEffect(()=>{
    const todos = JSON.parse(localStorage.getItem("todos"))
    if(todos && todos.length>0){
      setTodos(todos)
    }
  },[])
  useEffect(()=>{
    localStorage.setItem("todos", JSON.stringify(todos))
  
},[todos])
const pct = todos.length === 0
    ? 0
    : Math.round((todos.filter((t) => t.completed).length / todos.length) * 100)


  return (
    <TodoProvider value={{todos,addTodo,updatedTodo,deleteTodo,toggleComplete}}>
    <div className="page">
      <div className="card">

        {/* ── TOP BAR: title + percentage ── */}
        <div className="top-bar">
          <div>
            <h1 className="card-title">My Tasks</h1>
            {/* Replace with dynamic date if you want */}
            <p className="card-date">  {new Date().toLocaleDateString('en-US', { weekday: 'long', month: 'long', day: 'numeric' })}
</p>
          </div>
          {/* Replace 0 with your computed completion percentage */}
          <span className="completion-pct">{pct}%</span>
        </div>

        {/* ── PROGRESS BAR ── */}
        <div className="progress-track">
          {/* Set width via inline style using your percentage, e.g. style={{ width: `${pct}%` }} */}
<div className="progress-fill" style={{ width: `${pct}%` }} />
        </div>

        {/* ── INPUT ROW ── */}
      <TodoInput />

        {/* ── TASK LIST ── */}
<div className="task-list">
  {todos.length === 0 && (
    <p className="empty-state">No tasks yet. Add one above.</p>
  )}
  {todos.map((todo) => (
    <TodoList key={todo.id} todo={todo} />
  ))}
  </div>
  </div>    
    </div>
    </TodoProvider>
  );
}

export default App;
