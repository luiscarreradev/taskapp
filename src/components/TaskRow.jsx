import React from 'react'

export const TaskRow = ({ tarea, handleTask }) => (
  <tr key={tarea.name}>
    <td>{tarea.name}</td>
    <td>
      <input type="checkbox" checked={tarea.done} onChange={() => handleTask(tarea)}/>
    </td>
  </tr>
)