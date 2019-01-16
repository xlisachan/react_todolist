import React, { Component } from 'react';

class ListItem extends Component {
    render() {
        return (
            <div id={this.props.index} className="ListItem">
               { this.props.children }
            </div>
        )
    }
}

export default ListItem;