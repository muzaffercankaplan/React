import React, { useState } from 'react'
import "./form.css"

const FormArea = ({setTask, task}) => {
    const [toDo,setToDo] = useState("")

    const onChanceInput = (e) => {
        setToDo(e.target.value)
    }
    
    const handleSubmit = (e) => {
        e.preventDefault()
        if(toDo === "" || toDo.trim() === "") {
            setToDo("")
            return  false;
        }
        setTask([...task,{id: Date.now(), work: toDo, done: true}])
        setToDo("")
    }

  return (
    <div className='f-container'>
        <form className='form-container' onSubmit={handleSubmit}>
            <input className='input-area' value={toDo} onChange={onChanceInput} placeholder='What do you do Today?'/>
        </form>
    </div>
  )
}

export default FormArea