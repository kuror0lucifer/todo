import React from 'react';
import CheckBox from './CheckBox';
import {BiTrashAlt} from 'react-icons/bi'



export default function ListItems({todo, onChange, onDel}) {
  return (
    <ul>
        {todo.map( e => {
            return (
                <div className='flex justify-between items-center mb-6 first-of-type:mt-8'>
                    <CheckBox onChange={onChange} todo={e}/>
                    <div className='w-80 h-6 border-b mr-3'>
                    <li key={e.id} className={`${e.isCompleted ? 'line-through' : ''} overflow-clip`}>{e.title}</li>
                    </div>
                    <BiTrashAlt onClick={() => onDel(e.id)} className='w-5 h-5 cursor-pointer hover:text-red-500'/>
                </div>
            )
            })
        }
    </ul>
    )
}
