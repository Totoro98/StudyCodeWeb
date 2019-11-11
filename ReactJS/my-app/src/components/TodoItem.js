import React, { Component } from 'react';

class TodoItem extends Component {
    render(){
        return (
            <div className="TodoItem">
                <p>{this.props.title}</p>
                <p>{this.props.object.data}</p>
            </div>
        );
    }
}

export default TodoItem