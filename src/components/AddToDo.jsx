import React from 'react'
import { useState } from 'react'

const AddToDo = (Props) => {
    const [item, setItem] = useState("")

    const handleChange = (e) =>{
        setItem(e.target.value) 
    }
    const handleSubmit = (e) =>{
        e.preventDefault()
        Props.item(item)
    }
    return (
    <form method = 'post' onSubmit={handleSubmit}>
        <input type ="text" name="item" value ={item} onChange ={handleChange} placeholder="Enter Todo"/>
        <button type ='submit'>Add</button>
    </form>
    )
}

export default AddToDo;