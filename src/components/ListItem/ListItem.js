import React, { Component } from 'react';
import '../ListItem/ListItem.css';
import { FaSave, FaTimes, FaPen, FaTrash } from 'react-icons/fa';

class ListItem extends Component {
    state = {
        editing: false
    }

    edit = () => {
        this.setState({
            editing: true
        })
    }

    remove = () => {
        this.props.onRemove(this.props.item)
    }

    renderForm = () => {
        return (
            <div id={this.props.item} className="ListItem">
                <form>
                    <textarea defaultValue={this.props.children}/>
                    <button id="save"><FaSave /></button>
                    <button id="remove"><FaTimes /></button>
                </form>
            </div>
        )
    }

    renderDisplay = () => {
        return (
            <div id={this.props.item} className="ListItem">
               { this.props.children }
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