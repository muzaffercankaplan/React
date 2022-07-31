import React, { useState } from 'react'
import Form from './components/Form/Form'
import List from './components/List/List'
import "./App.css"
import Footer from './components/Footer/Footer'


const App = () => {

  const [task,setTask] =useState([])
  const [filter, setFilter] = useState('all')
  
  return (
    <div className='app-container'>
  
     <h2 className='app-header'>Todos</h2>
      <Form setTask={setTask} task={task}/>
      <List task={task} setTask={setTask} filter={filter}/>
     
      <Footer  task={task} setTask={setTask} handleStatus={setFilter}/>
      
    </div>
  )
}

export default App