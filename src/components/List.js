import React, { Component } from 'react';
import ListItem from './ListItem';
import '../stylesheets/List.css';
import { FaExclamationCircle, FaPlus } from 'react-icons/fa';

class List extends Component {
    state = {
        tasks: [],
        userInput: ''
    }

    componentDidMount() {
        var data = require('../../src/data.json');
        this.setState({ 
          tasks: data
        })
    }

    handleUserInput = e => {
        this.refs.alertMessage.setAttribute('style', 'display: none');
        this.refs.taskInput.setAttribute('style', 'border: 1px solid slategray');
        this.setState({
            userInput: e.target.value
        })
    }
    
    add = (e) => {
        e.preventDefault();
        if (this.state.userInput) {
            this.setState(prevState => ({
                tasks: [
                    ...prevState.tasks,
                    {
                        id: this.nextId(),
                        task: this.state.userInput
                    }
                ],
                userInput: ''
            }))
            this.refs.alertMessage.setAttribute('style', 'display: none');
            this.refs.taskInput.setAttribute('style', 'border: 1px solid slategray');
        } else {
            this.refs.popupAlert.setAttribute('style', 'display: inline');
            this.refs.alertMessage.setAttribute('style', 'display: inline');
            this.refs.taskInput.setAttribute('style', 'border: 1px solid red');
        }
    }

    nextId = () => {
        this.uniqueId = this.uniqueId || 4
        return this.uniqueId++
    }

    update = (newText, i) => {
        this.setState(prevState => ({
            tasks: prevState.tasks.map(
                task => (task.id !== i) ? task : {...task, task: newText}
            )
        }))
    }

    remove = (id) => {
        this.setState(prevState => ({
            tasks: prevState.tasks.filter(task => task.id !== id)
        }))
    }

    popup = () => {
        this.refs.popupAlert.setAttribute('style','display: none');
    }

    render() {
        return (
            <div className="List">
                <div className="list-header">To Do List</div>
                <div className="list-form">
                    <div className="alert-message" style={{display: 'none'}} ref="alertMessage">
                        <FaExclamationCircle /> Enter a task
                    </div>
                    <form className="add-form" onSubmit={ this.add }>
                        <input type="text" 
                                placeholder="Add task to list"
                                onChange={ this.handleUserInput } 
                                value={ this.state.userInput } 
                                ref="taskInput" />
                        <button className="add" onClick={ this.add }><FaPlus /></button>
                    </form>
                </div>
                <div className="list-items">
                    { this.state.tasks.map(task => {
                        return (
                            <ListItem key={ task.id }
                                        item={ task.id }
                                        onChange={ this.update }
                                        onRemove={ this.remove }>
                                { task.task }
                            </ListItem>
                        )
                    })}
                </div>
                <div className="popup-alert" style={{display: 'none'}} ref="popupAlert" >
                    <FaExclamationCircle />
                    <p>Task was not entered in text field</p>
                    <button className="alert-btn" onClick={ this.popup }>OK</button>
                </div>
            </div>
        )
    }
}

export default List;