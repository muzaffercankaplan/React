import React from 'react'
import "./Footer.css"

const Footer = ({task , setTask ,handleStatus}) => {

const clearCompleted = ( ) => {
  setTask(task.filter(item => item.done ))
  handleStatus("all")
}
 
   return (
    <div className={task.length===0 ? "empty-footer" : "footer-container"}>
        <span className='task-length , spn-header'>{task.length}</span>
        <div className='span-container'>
        <span onClick={() => handleStatus("all")} className='spn'>All</span>
        <span onClick={() => handleStatus("active")} className='spn'>Active</span>
        <span onClick={() => handleStatus("completed")} className='spn'>Completed</span>
        </div>
        <div>
        <span onClick={clearCompleted} className='footer-span, spn'>Clear completed</span>
        </div>
    </div>
  )
}

export default Footer