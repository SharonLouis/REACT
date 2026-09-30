import { useState } from 'react'
import { useTodo } from '../context'

function TodoInput() {
  const [input, setInput] = useState('')
  const { addTodo, todos, deleteTodo } = useTodo()


  const handleAdd = () => {
    if (!input.trim()) return
    addTodo(input.trim())
    setInput('')
  }
  const clearCompleted = () => {
  todos
    .filter((t) => t.completed)
    .forEach((t) => deleteTodo(t.id))
}
  return (
    <div className="input-row">
      <input
        className="task-input"
        placeholder="What needs to be done?"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        onKeyDown={(e) => e.key === 'Enter' && handleAdd()}
      />
      <button className="add-btn" onClick={handleAdd}>
  Add
</button>

{todos.some((t) => t.completed) && (
  <button className="clear-btn" onClick={clearCompleted}>
    Clear done
  </button>
)}
    </div>
  )
}

export default TodoInput