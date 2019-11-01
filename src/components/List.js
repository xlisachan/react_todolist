import React from 'react';
import '../stylesheets/List.css';
import PropTypes from 'prop-types';
import { FaExclamationCircle, FaPlus } from 'react-icons/fa';

const List = React.forwardRef(({alert, error, onChange=f=>f, onClose=f=>f, onSubmit=f=>f, renderTasks=f=>f}, ref) => {
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
                { renderTasks() }
            </div>

            <div className="popup-alert" style={{display: error ? 'inline' : 'none'}}>
                <FaExclamationCircle />
                <p>Task was not entered in text field</p>
                <button className="alert-btn" onClick={ onClose }>OK</button>
            </div>
        </div>
    )
})

List.propTypes = {
    alert: PropTypes.bool.isRequired,
    error: PropTypes.bool.isRequired,
    onChange: PropTypes.func.isRequired,
    onClose: PropTypes.func.isRequired,
    onSubmit: PropTypes.func.isRequired,
    renderTasks: PropTypes.func
}

export default List;