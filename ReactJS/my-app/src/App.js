import React, { Component } from 'react';
import './App.css';
import TodoItem from './components/TodoItem'
import './components/TodoItem.css';

class App extends Component{
  constructor(){
    super();
    this.index = null
    this.state = {
      array : [
        {title: 'Mining data',iscomplete: true},
        {title: 'Xamarin',iscomplete: false},
        {title: 'Olap', iscomplete: false}
      ]
    }
    
    this.onItemClick= this.onItemClick.bind(this)
  }
  onItemClick(event){
    var p = event.target
    var i= parseInt(p.dataset.id)

    var array = this.state.array
    array[i].iscomplete = !array[i].iscomplete
     
    this.setState(state => ({
      array : array
    }));
  }
  render(){
    return (
      <div className="App">
        {
          this.state.array.length > 0 &&
          this.state.array.map((item, index)=>
            <TodoItem  item={item} id={index} onItemClick = {this.onItemClick} />)
        }
        {this.state.array.length === 0 && 'Notthing here'}
      </div>
    );
  }
}

export default App;
