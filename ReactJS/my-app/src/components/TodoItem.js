import React, { Component } from 'react';

class TodoItem extends Component {
    render(){
        // const item = this.props.item; cách 1
        const {item} = this.props; //cách 2, destructuring assignment syntax 
        //{item} = { item : {title:"Olap",iscomplete:true}}
        //console.log(item) => {title:"Olap",iscomplete:true}
        let className = "TodoItem"
        if(item.iscomplete){
            className +=" TodoItem-complete"
        }
        return (
            <div className={className}>
                <p>{item.title}</p>
            </div>
        );
    }
}

export default TodoItem