import React from 'react';

import './CompletedTasks.css'
import Task from './Task'

const CompletedTasks = (props) => {

    const listCompletedtasks = props.tasks.filter(task => task.completed);

    return (

        <div className='completedTask'>
            {listCompletedtasks.map(task =>
                (
                    <Task key={task.id} task={task} removeTask={props.removeTask} />

                )
            )}
        </div>

    )

};


export default CompletedTasks;