import React from 'react'
import ListItems from './ListItems'


export default function Block({todo, onChange, onDel}) {
  return (
    <div className='w-1/2 h-96 bg-white rounded-xl m-auto p-4'>
        <h1 className='text-center text-xl font-bold'>Todo List</h1>
        <div className='flex justify-around'>
        <ListItems todo={todo} onChange={onChange} onDel={onDel} className=''/>
        </div>
    </div>
  )
}
