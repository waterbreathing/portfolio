import React, { Component } from 'react';
import './AddTask.css'
// import { FiGithub, FiLinkedin, FiSend, FiYoutube } from 'react-icons/fi';



class AddTask extends Component {

    constructor(props) {
        super(props);

        this.state = this.props.taskToEdit;


    }


    // state = {
    //     id: 6,
    //     startDate: new Date().toISOString().slice(0, 10),
    //     endDate: new Date().toISOString().slice(0, 10),
    //     deadline: false,
    //     priority: false,
    //     body: '',
    //     completed: false,

    // }

    id = 1000



    // componentWillReceiveProps = () => {

    //     this.setState(this.props.taskToEdit)

    // }

    static getDerivedStateFromProps(nextProps, prevState) {
        if (nextProps.taskToEdit.id !== prevState.id && nextProps.taskToEdit.edit) {


            return nextProps.taskToEdit
        }
        else return null

    };




    enterBody = (e) => {


        this.setState({
            body: e.target.value
        })
    }


    handlePriority = (e) => {

        this.setState({
            priority: !this.state.priority
        })
    }

    resetInputs = () => {
        // console.log('reset')
        console.log(this.state.edition)
        this.setState({
            id: 0,
            startDate: new Date().toISOString().slice(0, 10),
            endDate: new Date().toISOString().slice(0, 10),
            // endDate: this.state.startDate,
            deadline: false,
            priority: false,
            body: '',
            completed: false,
            edit: false,
        })
        // console.log(this.state)
    }



    appendTask = (e) => {
        e.preventDefault()

        this.id++;

        if (this.state.body.length < 2 || this.state.body.trim().length < 2) return;

        let newTask = {
            id: this.id,
            startDate: this.state.startDate,
            endDate: this.state.endDate,
            deadline: this.state.deadline,
            priority: this.state.priority,
            body: this.state.body,
            completed: false,
            edit: true,

        }



        this.props.addTask(newTask);

        this.resetInputs();

    }

    handleDeadline = (e) => {

        console.log(e.target.value)

        if (e.target.value !== new Date().toISOString().slice(0, 10)) {
            this.setState({
                endDate: e.target.value,
                deadline: true
            })

        }
        this.setState({
            endDate: e.target.value
        })
    }

    addDeadline = (e) => {

        console.log(this.state.deadline)
        this.setState({
            deadline: !this.state.deadline
        })
    }


    render() {
        return (
            <div className='addTaskStyle' >
                <h2 className='addTaskHeader'>Add or edit task:</h2>
                <form onSubmit={this.appendTask} >

                    <p >
                        <input className='inputBody' type="text" name="body" id="body" value={this.state.body} onChange={this.enterBody}
                            placeholder='min 2 characters...'
                        />
                    </p>
                    <div className='buttonsAndDate'>
                        <span >
                            <input type='button' className={this.state.priority ? 'priorityActive btn' : 'priorityInactive btn'} onClick={this.handlePriority} value='priority'
                            />
                        </span>
                        <span>
                            <input type="button" value="deadline" onClick={this.addDeadline}
                                className={this.state.deadline ? 'priorityActive btn' : 'priorityInactive btn'}
                            />
                        </span>
                        <span>
                            <input type="date" name="endDate" id="endDate" min={this.state.startDate}
                                value={this.state.endDate} onChange={this.handleDeadline} className='btn'
                            />
                        </span>
                        <span>
                            <button className='priorityInactive btn submit' type='submit'>Submit</button>
                        </span>
                    </div>
                </form>
            </div>

        )
    }
}

export default AddTask;