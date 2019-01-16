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

    render() {
        return (
            <div className="List">
                <div className="list-header">To Do List</div>
                <div className="list-body">
                    { this.state.tasks.map(task => {
                        return (
                            <ListItem key={ task.id }
                                      index={ task.id }>
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