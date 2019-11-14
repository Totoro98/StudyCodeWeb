import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import TodoItem from './components/TodoItem'
import './components/TodoItem.css';

class App extends Component{
  constructor(){
    super();
    this.array= [
      // {title: 'Mining data',iscomplete: true},
      // {title: 'Xamarin',iscomplete: false},
      // {title: 'Olap', iscomplete: false}
    ]
  }
  render(){
    return (
      <div className="App">
        {
          this.array.length > 0 &&
          this.array.map((item, index)=>
            <TodoItem key={index} item={item} />)
        }
        {this.array.length == 0 && 'Notthing here'}
      </div>
    );
  }
}

export default App;
