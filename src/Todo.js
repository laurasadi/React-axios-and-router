import React, {useState} from 'react';
import TodoList from './TodoList';
import NewTask from './NewTask';

const Todo = () =>{
    const [tasks, setTask] = useState([
    {
        Text:"clean your room",
        isCompleted: false
    },
    { Text:"clean your room",
        isCompleted: true
    }

])
    const addNewTask = (text) =>{
        let newrow = [...tasks,{text}] ///clone
        setTask(newrow)

    }
    return(
        <div>
    <div className='table'>
        {tasks.map((task, index)=>(
            <TodoList 
            key={index}
            index={index}
            task={task}/>
        ))}
    </div>
        <NewTask addNewTask={addNewTask}/>
    </div>
)
        }
export default Todo;