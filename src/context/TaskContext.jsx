import { createContext, useState, useEffect } from "react";
import { tasks as data} from "../data/Task";
export const taskContext = createContext();
export function TaskContextProvider(props) {

  const [tasks, setTask] = useState([]);

  function CreateTask(task){
    setTask([...tasks,{
      title: task.title,
      id: tasks.length,
      descripcion: task.descripcion
    }])
  }
  
  
  function DeleteTask(taskId){
   console.log(tasks)
   console.log(taskId) 
   setTask(tasks.filter(task => task.id != taskId));

  }

  useEffect(() => {
    setTask(data);
  }, []);


  return (
    <taskContext.Provider value={{
       tasks,
       DeleteTask,
       CreateTask
    }}>{props.children}</taskContext.Provider>
  );
}

export default taskContext