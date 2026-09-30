import { useState } from 'react'
import { useTodo } from '../context'

function TodoList({ todo }) {
  const { toggleComplete, deleteTodo, updatedTodo } = useTodo()
  const [isEditing, setIsEditing] = useState(false)
  const [editVal, setEditVal] = useState(todo.todo)

  const handleSave = () => {
    if (!editVal.trim()) return
    updatedTodo(todo.id, { ...todo, todo: editVal.trim() })
    setIsEditing(false)
  }

  return (
    <div className={`task-row ${todo.completed ? 'done' : ''}`}>

      <button
        className={`task-circle ${todo.completed ? 'checked' : ''}`}
        onClick={() => toggleComplete(todo.id)}
      />

      {isEditing ? (
        <input
          className="task-input"
          style={{ padding: '4px 10px', fontSize: '13px' }}
          value={editVal}
          onChange={(e) => setEditVal(e.target.value)}
          onKeyDown={(e) => e.key === 'Enter' && handleSave()}
          autoFocus
        />
      ) : (
        <span className="task-text">{todo.todo}</span>
      )}

      <span className="task-meta">
        {isEditing ? (
          <button className="meta-btn" onClick={handleSave}>save</button>
        ) : (
          <>
            {!todo.completed && (
              <button className="meta-btn" onClick={() => setIsEditing(true)}>edit</button>
            )}
            <button className="meta-btn meta-btn--delete" onClick={() => deleteTodo(todo.id)}>✕</button>
          </>
        )}
      </span>

    </div>
  )
}

export default TodoList