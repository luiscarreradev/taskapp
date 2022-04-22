import React from 'react'

const TaskBanner = ({ userName, taskItems}) => (
    <h4 className='bg-primary text-white text-center p-4'>
      {userName}'s Task App ({taskItems.filter(t => !t.done).length} taks to do)
    </h4>
  )

export default TaskBanner

