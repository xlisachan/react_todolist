import React, { Component } from 'react';
import ListItem from '../ListItem/ListItem';
import '../List/List.css';

class List extends Component {
    state = {
        tasks: []
    }

    componentDidMount() {
        var data = require('../../../src/data.json');
        this.setState({ 
          tasks: data
        })
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

    render() {
        return (
            <div className="List">
                <div className="list-header">To Do List</div>
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