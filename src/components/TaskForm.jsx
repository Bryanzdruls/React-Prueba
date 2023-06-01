import {useContext, useState} from 'react'
import {taskContext} from '../context/TaskContext'


function TaskForm() {

  const [title, setTitle] = useState("")
  
  const [descripcion, setDescripcion] = useState("")
  
  const {CreateTask} =  useContext(taskContext)


 

  const handleSubmit= (e)=>{
    e.preventDefault();
    CreateTask({
      title,
      descripcion
    });
    setTitle('')
    setDescripcion('')
  }
  return (
    <div className='max-w-md mx-auto'>
      <form onSubmit={handleSubmit} className='bg-slate-800 p-10 mb-4 '>
        <h1 className='text-2xl text-white font-bolc mb-3 '>Crea Tu Tarea</h1>
        <input placeholder="Ingresa tu tarea" 
        onChange={(e)=> setTitle(e.target.value)}
        value={title}
        autoFocus
        className='bg-slate-300 p-3 w-full mb-2'/>
        <textarea placeholder='Escribe la descripcion de la tarea'
        onChange={e =>setDescripcion(e.target.value)}
        value={descripcion}
        className='bg-slate-300 p-3 w-full mb-2'></textarea>
        <button className='bg-indigo-500 p-3 py-1 text-white '>Guardar</button>
    </form>
    </div>

  )
}

export default TaskForm
