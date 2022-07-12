import React from 'react'
import del from '../img/icon-delete.svg'

const Note = ({task,clickHandler}) => {
  return (
    <div className="bg-1">
        <div className="de">
            <h2>NOTE #</h2>
            <img  onClick={() => clickHandler(task.id)} src={del}/>
        </div>
        <h3>{ task.note }</h3>
    </div>
  )
}

export default Note;