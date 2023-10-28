import React from 'react'
import ListItem from './ListItems'


export default function Block({todo}) {
  return (
    <div className='w-1/2 h-96 bg-white rounded-xl m-auto'>
        <div className='flex justify-around'>
        <ListItem todo={todo} className=''/>
        </div>
    </div>
  )
}
