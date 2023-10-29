import React, { useState } from 'react'

const СreateField = ({setTodos}) => {
    const [title, setTitle] = useState('');

    const addTodo = (title) => {
        setTodos(prev => [
          {
            id: new Date(),
            title,
            isCompleted: false,
          },
          ...prev,
        ]);
        setTitle('');
      };

  return (
    <div className='m-auto w-1/2 h-12 bg-white rounded-xl flex justify-center items-center'>
        <input type="text" 
        onChange={e => setTitle(e.target.value)} 
        value={title}
        onKeyPress={e => e.key === 'Enter' && addTodo(title)}
        className='w-3/4 border-none outline-none bg-transparent text-lg'
        placeholder='Add a task'
        />
    </div>
  )
}

export default СreateField