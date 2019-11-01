import React from 'react';
import PropTypes from 'prop-types';
import { FaExclamationCircle, FaPlus } from 'react-icons/fa';

const Form = React.forwardRef(({alert, error, onChange=f=>f, onSubmit=f=>f}, ref) => {
    return (
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
    );
});

Form.propTypes = {
    alert: PropTypes.bool.isRequired,
    error: PropTypes.bool.isRequired,
    onChange: PropTypes.func.isRequired,
    onSubmit: PropTypes.func.isRequired
}
 
export default Form;