import React, { useState } from 'react'

const СreateField = ({addTodo}) => {
    const [title, setTitle] = useState('');

  return (
    <div className='absolute bottom-8 left-1/3'>
        <input type="text" 
        onChange={e => setTitle(e.target.value)} 
        value={title}
        onKeyPress={e => e.key === 'Enter' && addTodo(title)}
        className='w-full border-none outline-none bg-slate-600'
        />
    </div>
  )
}

export default СreateField