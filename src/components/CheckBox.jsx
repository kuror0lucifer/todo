import React from 'react'
import {BsCheck2} from 'react-icons/bs'

export default function CheckBox({isCompleted}) {

  return (
    <div className={`rounded-xl border-2 border-green-300 w-6 h-6 cursor-pointer `} >
      {isCompleted && <BsCheck2 className='' />}
    </div>
  )
}
