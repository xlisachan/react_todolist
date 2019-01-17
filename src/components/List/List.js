import React, { Component } from 'react';
import ListItem from '../ListItem/ListItem';
import '../List/List.css';
import { FaExclamationCircle, FaPlus } from 'react-icons/fa';

class List extends Component {
    state = {
        tasks: [],
        userInput: ''
    }

    componentDidMount() {
        var data = require('../../../src/data.json');
        this.setState({ 
          tasks: data
        })
    }

    handleUserInput = e => {
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
        } else {
            document.getElementById('popup-alert').setAttribute('style', 'display: inline');
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
        document.getElementById('popup-alert').setAttribute('style','display: none');
    }

    render() {
        return (
            <div id="todolist" className="List">
                <div className="list-header">To Do List</div>
                <div id="popup-alert" style={{display: 'none'}}>
                    <FaExclamationCircle />
                    <p>Task was not entered in text field</p>
                    <button id="alert" onClick={ this.popup }>OK</button>
                </div>
                <form className="add-form" onSubmit={ this.add }>
                    <input type="text" 
                            onChange={ this.handleUserInput } 
                            placeholder="Add task to list"
                            value={ this.state.userInput } />
                    <button id="add"><FaPlus /></button>
                </form>
                <div className="list-body">
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
            </div>
        )
    }
}

export default List;