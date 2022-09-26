import {useState,useContext} from 'react';
import { TaskContext } from '../context/TaskContext';

function TaskForm() {

  const { createTask } = useContext(TaskContext);
  
  const [Title, setTitle] = useState("")
  const [Description, setDescription] = useState("")

  const HandleSubmit = (e) =>{
    e.preventDefault();
   
    createTask({Title,Description});

    setTitle("");
    setDescription("");
  }

  return (    
    <div className='max-w-md mx-auto'>
      <h1 className='text-2xl font-bold text-white mb-3'>Crear Tarea</h1>
      <form onSubmit={HandleSubmit} className="bg-slate-800 p-10 mb-4">
        <input type="text" placeholder="Escribe tu tarea" 
          onChange={ (e) => {
            console.log(e.target.value)
            setTitle(e.target.value);            
          }}
          autoFocus
          className='bg-slate-300 p-3 w-full mb-2'
          value={Title}
        />

        <textarea placeholder='Escribe la descripción de la tarea'
          onChange={ (e) =>{
            setDescription(e.target.value)            
          }}
          className='bg-slate-300 p-3 w-full mb-2'
          value={Description}></textarea>

        <button
         className='bg-indigo-500 px-3 py-1 text-white rounded-md hover:bg-indigo-400'
        >Guardar</button>
    </form>    
    </div>
  )
}

export default TaskForm