import TaskCard from "./TaskCard";
import {taskContext} from '../context/TaskContext'
import {useContext} from 'react'

function TaskList() {
  
  const {tasks}= useContext(taskContext)
  if (tasks.length === 0) {
    return <h1 className="text-white text-4xl text-center">No hay Tarea</h1>;
  }

  return (

    <div className='grid grid-cols-4 gap-2 '>
      {tasks.map((task) => (
        <TaskCard key={task.id}task={task} />
      ))}
    </div>
  );
}

export default TaskList;
