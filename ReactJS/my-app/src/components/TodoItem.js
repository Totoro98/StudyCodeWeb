import React, { Component } from 'react';
var classNames = require('classnames');
class TodoItem extends Component {
    render(){
        // const item = this.props.item; cách 1
        const {item} = this.props; //cách 2, destructuring assignment syntax 
        //{item} = { item : {title:"Olap",iscomplete:true}}
        //console.log(item) => {title:"Olap",iscomplete:true}
        
        var classname = classNames('TodoItem')
        
        if(item.iscomplete){
            classname = classNames('TodoItem','TodoItem-complete')
        }
        return (
            <div className={classname}>
                <p>{item.title}</p>
            </div>
        );
    }
}

export default TodoItem