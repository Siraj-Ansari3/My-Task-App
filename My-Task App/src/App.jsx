import { useEffect, useState } from 'react'
import { v4 as uuidv4 } from 'uuid';
import Field from './components/Field';
import Card from './components/Card';
import './components/Body.css'

function App() {
  const [tasks, setTasks] = useState([]);
  const [count, setCount] = useState('')

  useEffect(() => {
    let taskString = localStorage.getItem("tasks")
    if (taskString) {
      let newTasks = JSON.parse(localStorage.getItem("tasks"))
      setTasks(newTasks)
    }
  }, [])

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);


  const addTask = (task) => {
    task.id = uuidv4();
    setTasks([...tasks, task]);
    // console.log(task.id)
  }

  const saveEditTask = (id, newText) => {
    { tasks.map((task) => task.id === id ? (task.text = newText) : task) }
  }


  const deleteTask = (id) => {
    setTasks(tasks.filter(task => task.id !== id));
  }

  const toggleTaskCompletionState = (id) => {
    setTasks(tasks.map(task => task.id === id ? { ...task, completed: !task.completed } : task));

  }

  return (
    <>
      <div className='contentContainer'>
        <Field addTask={addTask} />
        <div className="cardContainer">
          {tasks.map((task) => (
            <Card
              task={task}
              key={task.id}
              toggleTaskCompletionState={toggleTaskCompletionState}
              saveEditTask={saveEditTask}
              deleteTask={deleteTask} />
          ))}
        </div>
      </div>
    </>
  )
}

export default App;
