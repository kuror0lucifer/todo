import React from 'react'
import {AiOutlineCheck} from 'react-icons/ai'
export default function CheckBox({ todo, onChange}) {
  return (
    <div className={`
    w-5 
    h-5 
    rounded-full 
    border-gray-200 
    border-2 
    mr-4 
    cursor-pointer
    ${todo.isCompleted ? 'bg-green-400': ''}`}
    onClick={() => onChange(todo.id)}
    >
      {todo.isCompleted ? <AiOutlineCheck /> : null}
    </div>
  )
}
