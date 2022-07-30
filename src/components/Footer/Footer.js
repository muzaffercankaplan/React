import React from 'react'
import "./Footer.css"

const Footer = ({task , setTask}) => {

  // const [addform,setaddForm] = useState("")

// useEffect(() => {
//   setaddForm([...task])
// },[task])


  // const completdeBtn = () => {
  //   setTask(addform.filter(item => !item.done ? item : null))
  //   console.log( "task",task)
  //   }

  //   const allBtn = () => {
  //     setTask(addform)
  //     console.log("alltask",task)
  //   }
  return (
    <div className={task.length===0 ? "empty-footer" : "footer-container"}>
        <span className='task-length , spn-header'>{task.length}</span>
        <div className='span-container'>
        <span onClick={null} className='spn'>All</span>
        <span onClick={() => setTask(task.filter(item => item.done === true))} className='spn'>Active</span>
        <span onClick={null} className='spn'>Completed</span>
        </div>
        <div>
        <span onClick={() => setTask(task.filter(item => item.done ))} className='footer-span, spn'>Clear completed</span>
        </div>
    </div>
  )
}

export default Footer