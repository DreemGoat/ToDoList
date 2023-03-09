import React from 'react'

const StuffToDo = (props) => {
    return (
        <div className ='todo-item'>
            <input Type = "checkbox" onChange={() => props.completed(props.id)}/>
            <p className='ml-1'>{props.item}</p>
        </div>
    )
}

export default StuffToDo;