import React from 'react'
import Check from './CheckBox.jsx'
import {BiTrashAlt} from 'react-icons/bi'

export default function Item({data, changeTodo}) {


return (
<div className='w-3/4'>{
      data.map(el => {
        return (
            <div className='flex items-center justify-between mb-3 w-full h-10 '>
                <div className='flex gap-3'>
                <Check onClick={() => {changeTodo(data.id)}}/>
                <div key={el.id} className=''>{el.title}</div>
                </div>
                    <BiTrashAlt size={24} className='cursor-pointer hover:text-red-600 transition-colors ease-in-out duration-300'/>
            </div>
          )
    
      })
      }</div>
);
}
