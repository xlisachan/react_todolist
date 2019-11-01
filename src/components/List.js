import React from 'react';
import ListItem from './ListItem';
import '../stylesheets/List.css';
import { FaExclamationCircle, FaPlus } from 'react-icons/fa';

const List = React.forwardRef(({alert, error, tasks, onChange=f=>f, onClose=f=>f, onSubmit=f=>f, onUpdate=f=>f, onRemove=f=>f}, ref) => {
    return (
        <div className="List">
            <div className="list-header">To Do List</div>
            <div className="list-form">
                <div className="alert-message" style={{display: alert ? 'inline' : 'none'}}>
                    <FaExclamationCircle /> Enter a task
                </div>
                <form className="add-form" onSubmit={ onSubmit }>
                    <input
                        ref={ref}
                        type="text" 
                        placeholder="Add task"
                        onChange={ onChange } 
                        style={{display: error ? 'border: 1px solid red' : 'border: 1px solid slategray'}}
                    />
                    <button className="add" type="submit"><FaPlus /></button>
                </form>
            </div>

            <div className="list-items">
                { tasks.map(task => {
                    return (
                        <ListItem key={ task.id } item={ task.id } onChange={ onUpdate } onRemove={ onRemove }>
                            { task.task }
                        </ListItem>
                    )
                })}
            </div>

            <div className="popup-alert" style={{display: error ? 'inline' : 'none'}}>
                <FaExclamationCircle />
                <p>Task was not entered in text field</p>
                <button className="alert-btn" onClick={ onClose }>OK</button>
            </div>
        </div>
    )
})

export default List;