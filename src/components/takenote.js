import React, { useContext } from 'react';
import '../css/takenote.css'
import { NoteContext } from '../context/notecontext';
const Takenote = () => {

    const { setValue,initarr,initValue,setArr,id } = useContext(NoteContext);


    const submitHandler = (e) => {
        e.preventDefault()
        setArr([...initarr,
            {
                id: id,
                note:initValue
            }
        ])
        setValue('')
    }

    
    const changeHandler = (e) => {
        setValue(e.target.value)
    }


  return (
      <form onSubmit={submitHandler} className="note">
          <label>Add Notes</label>
          <input onChange={changeHandler} type="text" value={initValue} />
          <button type="submit">ADD</button>
        </form>
  )
}

export default Takenote;