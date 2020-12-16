import React from 'react';

const TodoList = ({index, task}) =>{
    return(
        <tr className='row'>
        <td> {task.text}</td>
        <td> {task.isCompleted ? 'Done' : 'In progress'}</td>
        </tr>
    )
}

export default TodoList