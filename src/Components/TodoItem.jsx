import React from 'react'

function TodoItem({todo, onChange, onDelete}) {
  return (
    <div>
      <label>
        <input type="checkbox" checked={todo.isCompleted} onChange={(e)=>{
            onChange({
                ...todo,
                isCompleted: e.target.checked
            })
        }}/>
        <span>{todo.text}</span>
        <button onClick={()=>{
            onDelete(todo)
        }}>X</button>
      </label>
    </div>
  )
}

export default TodoItem
