import React from 'react'

function TodoFooter({todos, onClearCOmpleted}) {
  const completedSize=todos.filter((todo)=>todo.isCompleted).length
  return (
    <div>
        <span>{completedSize}/{todos.length} Completed</span>
      <button onClick={onClearCOmpleted}>Clear Completed</button>
    </div>
  )
}

export default TodoFooter
