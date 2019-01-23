import React, { Component } from 'react';
import '../ListItem/ListItem.css';
import { FaRegCircle, FaCheckCircle, FaSave, FaTimes, FaPen, FaTrash } from 'react-icons/fa';

class ListItem extends Component {
    state = {
        editing: false,
        checked: false
    }

    toggleCheck = () =>  {
        this.setState({
            checked: !this.state.checked
        })
    }

    edit = () => {
        this.setState({
            editing: true
        })
    }

    remove = () => {
        this.props.onRemove(this.props.item)
    }

    save = (e) => {
        e.preventDefault();
        this.props.onChange(this._newText.value, this.props.item);
        this.setState({
            editing: false
        })
    }

    cancel = (e) => {
        e.preventDefault();
        this.setState({
            editing: false
        })
    }

    renderForm = () => {
        return (
            <div id={this.props.item} className="ListItem">
                <form className="edit-form">
                    <textarea ref={input => this._newText = input}
                              defaultValue={ this.props.children }/>
                    <span>
                        <button className="save" onClick={ this.save }><FaSave /></button>
                        <button className="cancel" onClick={ this.cancel }><FaTimes /></button>
                    </span>
                </form>
            </div>
        )
    }

    renderDisplay = () => {
        let status;
        this.state.checked ? status = <FaCheckCircle /> : status = <FaRegCircle />;

        return (
            <div id={this.props.item} className="ListItem">
               <button className="status status-btn" onClick={ this.toggleCheck }>
                    { status } <span style={{textDecoration: this.state.checked ? "line-through" : "none"}}><span className="status-font">{ this.props.children }</span></span>
                </button>
               <span className="button-div">
                    <button className="edit" onClick={ this.edit }><FaPen /></button>
                    <button className="remove" onClick={ this.remove }><FaTrash /></button>
                </span>
            </div>
        )
    }

    render() {
        return this.state.editing ? this.renderForm() : this.renderDisplay();
    }
}

export default ListItem;