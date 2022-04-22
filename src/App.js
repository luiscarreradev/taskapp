import { useState } from "react";
import { TaskRow } from "./components/TaskRow";
import TaskBanner from "./components/TaskBanner";


function App() {
  const [userName, setUserName] = useState("Mario");
  const [taskItems, setTaskItems] = useState([
    { name: "Task One", done: false },
    { name: "Task Two", done: false},
    { name: "Task Three", done: false },
    { name: "Task Four", done: false },
  ]);

  const toggleTask = task => 
    setTaskItems(taskItems.map(t => (t.name === task.name ? {...t, done: !t.done} : t)))


  const taskTableRows = () => taskItems.map(task => (
    <TaskRow tarea={task} key={task.name} handleTask={toggleTask}/>
  ))

  return (
    <div>
    <TaskBanner userName={userName} taskItems={taskItems}/>
      <table className="table table-striped table-bordered">
        <thead>
          <tr>
            <th>Description</th>
            <th>Done</th>
          </tr>
        </thead>
        <tbody>{taskTableRows()}</tbody>
      </table>
    </div>
  );
}

export default App;
