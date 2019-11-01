import React from 'react';
import '../stylesheets/List.css';
import PropTypes from 'prop-types';
import PopupModal from './PopupModal';
import Form from './Form';

const List = React.forwardRef(({alert, error, onChange=f=>f, onClose=f=>f, onSubmit=f=>f, renderTasks=f=>f}, ref) => {
    return (
        <div className="List">
            <div className="list-header">To Do List</div>
            
            <Form
                alert={alert}
                error={error}
                onChange={onChange}
                onSubmit={onSubmit}
            />

            <div className="list-items">
                { renderTasks() }
            </div>

            <PopupModal error={error} onClose={onClose} />
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