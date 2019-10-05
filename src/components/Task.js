import React from 'react';
import './Task.css'
import { FiThumbsUp, FiTrash, FiEdit3 } from 'react-icons/fi';


const Task = (props) => {

    const { id, startDate, endDate, priority, body, completed, deadline } = props.task



    const calculateDays = (x) => {
        if (x === 1) {

            const endPoint = new Date(endDate);
            const startPoint = new Date(startDate);
            const daysLeft = (endPoint.getTime() - startPoint.getTime()) / (1000 * 60 * 60 * 24);

            return daysLeft
        }
        else {
            const currentDate = new Date().toISOString().slice(0, 10);
            const endPoint = new Date(currentDate);
            const startPoint = new Date(endDate);
            const daysLeft = (startPoint.getTime() - endPoint.getTime()) / (1000 * 60 * 60 * 24);

            if (daysLeft < 0)
                return <span className='expiredTask'> expired: {Math.abs(daysLeft)} {Math.abs(daysLeft) === 1 ? 'day ago' : 'days ago'}</span>
            else if (daysLeft === 0) { return <span className='daysLeft'> task for today</span> }
            else return <span className='daysLeft'> days left: {daysLeft} </span>
        }
    }



    return (

        < div className={completed ? "completed" : "todo"} >

            <p className='taskBody'>  {body}  </p>
            <p className='taskDates' >
                <span className='startDate'> start: {startDate} </span>
                {!completed ? (deadline ? <span>deadline: {endDate}
                    {calculateDays(2)}</span> : null) : (<span style={{ color: 'white' }}>completed: {endDate} -  it took: {calculateDays(1)} {calculateDays(1) === 1 ? 'day ' : 'days '} </span>)}

                {/* </p>{calculateDays(1)}</span>)} */}
                {priority ? <span className='priorityStyle'> PRIORITY </span> : null}

            </p>



            {!completed ? <p>
                <button className='btnActiveTodos ' onClick={() => props.completeTask(id)}><FiThumbsUp className='iconInButton' /> completed</button>
                <button className='btnActiveTodos ' onClick={() => props.removeTask(id)}><FiTrash className='iconInButton' /> remove</button>
                <button className='btnActiveTodos ' onClick={() => props.editTask(id)}><FiEdit3 className='iconInButton' /> edit</button>

            </p> : <button className='btnActiveTodos' onClick={() => props.removeTask(id)}><FiTrash className='iconInButton' />remove</button>}

            <br />
        </div >


    )
}

export default Task;


