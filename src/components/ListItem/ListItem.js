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
                <form>
                    <textarea ref={input => this._newText = input}
                              defaultValue={this.props.children}/>
                    <button onClick={this.save} id="save"><FaSave /></button>
                    <button onClick={this.cancel} id="remove"><FaTimes /></button>
                </form>
            </div>
        )
    }

    renderDisplay = () => {
        let status;
        this.state.checked ? status = <FaCheckCircle /> : status = <FaRegCircle />;

        return (
            <div id={this.props.item} className="ListItem">
               <button onClick={ this.toggleCheck }>
                    { status } <span className="text-status">{ this.props.children }</span>
                </button>
               <span>
                    <button onClick={ this.edit } id="edit"><FaPen /></button>
                    <button onClick={ this.remove } id="remove"><FaTrash /></button>
                </span>
            </div>
        )
    }

    render() {
        return this.state.editing ? this.renderForm() : this.renderDisplay();
    }
}

export default ListItem;