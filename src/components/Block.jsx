import React from 'react'
import ListItems from './ListItems'
import CreateField from './СreateField'


export default function Block({todo, onChange, onDel, addTodo}) {
  return (
    <div className='w-1/2 h-min bg-white rounded-xl m-auto p-4 relative'>
        <h1 className='text-center text-xl font-bold'>Todo List</h1>
        <div className='flex justify-around'>
        <ListItems todo={todo} onChange={onChange} onDel={onDel} className=''/>
        </div>
        <CreateField addTodo={addTodo}/>
    </div>
  )
}
