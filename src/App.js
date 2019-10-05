import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import './App.css';
import './components/TodoTasks';
import TodoTasks from './components/TodoTasks';
import CompletedTasks from './components/CompletedTasks';
import AddTask from './components/AddTask'
import Header from './components/Header'
import FetchAPI from './components/FetchAPI'
import AboutMe from './components/AboutMe'

class App extends Component {

  state = {
    tasks: [
      {
        id: 1,
        startDate: '2019-09-01',
        endDate: '2019-12-02',
        deadline: true,
        priority: false,
        body: 'Book a flight to Tokyo',
        completed: false,
        edit: true,
      },
      {
        id: 2,
        startDate: '2019-01-15',
        endDate: '2019-09-29',
        deadline: true,
        priority: false,
        body: 'Compose a kind of folk trance music',
        completed: false,
        edit: true,
      },
      {
        id: 3,
        startDate: '2019-07-15',
        endDate: '2019-07-16',
        deadline: false,
        priority: true,
        body: 'Extend the gym subscription',
        completed: true,
        edit: true
      }
    ],
    edition: false,
    taskToEdit: '',
    newTask: {
      id: 7,
      startDate: new Date().toISOString().slice(0, 10),
      endDate: new Date().toISOString().slice(0, 10),
      deadline: false,
      priority: false,
      body: '',
      completed: false,
      edit: false

    }
  };


  completeTask = (id) => {


    const tasks = this.state.tasks.map(task => {
      if (task.id === id) {
        task.completed = !task.completed
        task.endDate = new Date().toISOString().slice(0, 10)
        return task
      }
      return task
    }
    )
    this.setState({
      tasks
    })

  }


  removeTask = (id) => {
    const tasks = this.state.tasks.filter(task => task.id !== id)

    this.setState({
      tasks
    })
  }

  addTask = (element) => {
    const tasks = [...this.state.tasks, element]

    this.setState({
      tasks,
      edition: false,
      taskToEdit: ''
    })
  }

  editTask = (id) => {

    if (this.state.edition) { return }

    console.log('APP editTask ' + id)

    const taskIndex = this.state.tasks.findIndex(task => task.id === id);

    console.log(taskIndex)
    this.setState({

      edition: true,
      taskToEdit: this.state.tasks[taskIndex],

    })

    window.scrollTo(0, 0);


    this.removeTask(id)

  }




  render() {
    return (

      <BrowserRouter basename={process.env.PUBLIC_URL}>
        <Header />
        <Route path='/' exact render={() => (
          <div className="App">
            {this.state.edition ? <AddTask addTask={this.addTask} taskToEdit={this.state.taskToEdit} /> :
              <AddTask addTask={this.addTask} taskToEdit={this.state.newTask}
              />}


            <h2 className='todoTasksHeader' >Todo tasks:</h2>
            <TodoTasks tasks={this.state.tasks} removeTask={this.removeTask} completeTask={this.completeTask}
              editTask={this.editTask}
            />
            <h2 className='todoTasksHeader'>Completed tasks:</h2>
            <CompletedTasks tasks={this.state.tasks} removeTask={this.removeTask} />

          </div>
        )} />

        <Route path='/fetchAPI' component={FetchAPI} />
        <Route path='/aboutMe' component={AboutMe} />




      </BrowserRouter>
    );
  }
}

export default App;
