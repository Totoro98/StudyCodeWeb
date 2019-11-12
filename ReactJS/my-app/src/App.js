import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import TodoItem from './components/TodoItem'

class App extends Component{
  constructor(){
    super();
    this.array= [
      'Mining data',
      'Xamarin',
      'Olap'
    ]
  }
  render(){
    return (
      <div className="App">
        {
          this.array.map((item, index)=><TodoItem key={index} title={item} />)
        }
      </div>
    );
  }
}

export default App;
