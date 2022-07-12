import React, { useContext } from 'react'
import { NoteContext } from '../context/notecontext'
import '../css/arr.css'
import Note from './note';

const Arr = () => { 
  const { initarr,initValue,setArr,id } = useContext(NoteContext);

  const clickHandler = (id) => {
    setArr(initarr.filter((task) =>  task.id !== id))
    console.log(id)
}

  return (
      <div className='main-bg'>
      {initarr.map((data) => {
        return <Note clickHandler={clickHandler} task={data} key={id} />
      })}
    </div>
  )
}

export default Arr