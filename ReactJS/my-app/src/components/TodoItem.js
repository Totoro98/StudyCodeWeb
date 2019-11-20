import React, { Component } from 'react';
var classNames = require('classnames');
class TodoItem extends Component {
    constructor(props){
        super(props)

        // this.onItemClick = this.onItemClick.bind(this)
    }
    // onItemClick(){
        
    //    console.log(this.props.item);
        
    // }
    render(){
        // const item = this.props.item; cách 1
        const {item, onItemClick, id} = this.props; //cách 2, destructuring assignment syntax 
        //{item} = { item : {title:"Olap",iscomplete:true}}
        //console.log(item) => {title:"Olap",iscomplete:true}
        
        var classname = classNames('TodoItem')
        if(item.iscomplete){
            classname = classNames('TodoItem','TodoItem-complete')
        }
        return (
            <div onClick={onItemClick} className={classname}>
                <p id={id} data-id={id} >{item.title}</p>
            </div>
        );
    }
}

export default TodoItem