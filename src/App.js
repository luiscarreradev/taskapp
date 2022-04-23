import { useState, useEffect } from "react";
import { TaskRow } from "./components/TaskRow";
import TaskBanner from "./components/TaskBanner";
import TaskCreator from "./components/TaskCreator";
import VisibilityControl from "./components/Visibility";


function App() {
  // Estados
  const [userName, setUserName] = useState("Mario");
  const [taskItems, setTaskItems] = useState([
    { name: "Task One", done: false },
    { name: "Task Two", done: false},
    { name: "Task Three", done: false },
    { name: "Task Four", done: false },
  ]);
  const [showCompleted, setShowCompleted] = useState(true)

  //useEffect
  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(taskItems));
  }, [taskItems]);
  
  useEffect(() => {
    let data = localStorage.getItem("tasks");
    if (data != null) {
      setTaskItems(JSON.parse(data));
    } else {
      setUserName("Mario example");
      setTaskItems([
        { name: "Task One Example", done: false },
        { name: "Task Two Example", done: false},
        { name: "Task Three Example", done: false },
        { name: "Task Four Example", done: false },
      ])
      setShowCompleted(true)
    }
  }, []);


  // Funciones
  const addNewTask = taskName => {
    if(!taskItems.find(t => t.name === taskName)) {
      setTaskItems([...taskItems, { name: taskName, done: false }])
    }
  }

  const toggleTask = task => 
    setTaskItems(taskItems.map(t => (t.name === task.name ? {...t, done: !t.done} : t)))


  const taskTableRows = (doneValue) => 
    taskItems
    .filter(task => task.done === doneValue)
    .map(task => (
    <TaskRow tarea={task} key={task.name} handleTask={toggleTask}/>
  ))
  return (
    <div>
      <TaskBanner userName={userName} taskItems={taskItems}/>

      <TaskCreator handleNewTask={addNewTask}/>
      <table className="table table-striped table-bordered">
        <thead>
          <tr>
            <th>Description</th>
            <th>Done</th>
          </tr>
        </thead>
        <tbody>{taskTableRows(false)}</tbody>
      </table>
      <div className="bg-secondary-text-white text-center p-2">
        <VisibilityControl 
          description="Completed Tasks"
          isChecked={showCompleted}
          handleCheck={checked => setShowCompleted(checked)}
        />
      </div>

      {
        showCompleted && (
          <table className="table table-striped table-bordered">
            <thead>
              <tr>
                <th>Description</th>
                <th>Done</th>
              </tr>
            </thead>
            <tbody>
              {taskTableRows(true)}
            </tbody>
          </table>
        )
      }
    </div>
  );
}

export default App;
