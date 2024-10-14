import React from 'react'
import TodoItem from './TodoItem'

function TodoList({todos, onChange, onDelete}) {
  return (
    <div>
      {
        todos.map((todo) => {
          return (
            <TodoItem 
            key={todo.id}
            todo={todo}
            onDelete={onDelete}
            onChange={onChange}
            />
          )
        })
      }
    </div>
  )
}

export default TodoList