import React from 'react'
import ListItems from './ListItems'


export default function Block({todo, onChange}) {
  return (
    <div className='w-1/2 h-96 bg-white rounded-xl m-auto'>
        <div className='flex justify-around'>
        <ListItems todo={todo} onChange={onChange} className=''/>
        </div>
    </div>
  )
}
