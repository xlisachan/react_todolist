import React, { Component } from 'react';
import List from './List';
import ListItem from './ListItem';
import axios from 'axios';
import uuid from 'uuid';

class ListContainer extends Component {
    state = {
        tasks: [],
        userInput: '',
        alert: false,
        error: false
    }

    componentDidMount() {
        axios
            .get('https://jsonplaceholder.typicode.com/todos?_limit=10')
            .then(res => {
                let titles = res.data.map(el => ({
                        id: el.id,
                        task: el.title
                }))
                this.setState({tasks: titles})
            })
            .catch(err => console.error(err));
    }

    handleUserInput = e => {
        this.setState({
            alert: false,
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
                        id: uuid.v4(),
                        task: this.state.userInput
                    }
                ],
                userInput: '',
                alert: false,
                error: false
            }))
            this.inputEl.value=""
        } else {
            this.setState({
                alert: true,
                error: true
            })
        }
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

    closeError = () => {
        this.setState({ error: false })
    }

    renderTasks = () => {
        return this.state.tasks.map(task =>
            <ListItem key={ task.id } item={ task.id } onChange={ this.update } onRemove={ this.remove }>
                { task.task }
            </ListItem>
        )
    }

    render() {
        return (
            <List
                ref={input => this.inputEl = input}
                alert={this.state.alert}
                error={this.state.error}
                onChange={this.handleUserInput}
                onSubmit={this.add}
                onClose={this.closeError}
                renderTasks={this.renderTasks}
            />
        )
    }
}

export default ListContainer;