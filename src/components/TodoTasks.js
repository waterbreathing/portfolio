import React from 'react';

import './TodoTasks.css'
import Task from './Task'

const TodoTasks = (props) => {

    const listTodoTasks = props.tasks.filter(task => !task.completed);


    return (
        listTodoTasks.map(task =>
            (
                <Task key={task.id}
                    task={task}
                    removeTask={props.removeTask}
                    completeTask={props.completeTask}
                    editTask={props.editTask} />
            )
        )
    )
};


export default TodoTasks;