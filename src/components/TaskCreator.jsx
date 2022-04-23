import React, { useState } from 'react';

const TaskCreator = props => {

  const [newTaskName, setNewTaskName] = useState('')

  const updateNewTaskValue = e => setNewTaskName(e.target.value);

  const createNewTask = () => {
    props.handleNewTask(newTaskName)
    setNewTaskName('');
  }

  return (
    <div className='my-1'>
      <input 
        type="text"
        className='form-control'
        value={newTaskName}
        onChange={updateNewTaskValue}
        />
      <button 
        className='btn btn-primary mt-1'
        onClick={createNewTask}>
          Add
      </button>
    </div>
  )
}

export default TaskCreator;