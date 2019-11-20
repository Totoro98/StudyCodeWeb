import React, { Component } from 'react';
import './App.css';
import Trafficlight from './components/Trafficlight.js'

const RED = 0
const ORANGE = 1 
const GREEN = 2


class App extends Component {
  constructor(){
    super()
    this.state= {
      currentcolor : RED
  }
  
    setInterval(()=>{
        this.setState({
            currentcolor : this.getNextColor(this.state.currentcolor)
        }) 
    },1000)
  }
  getNextColor(color){
    switch(color){
        case RED :
            return ORANGE
        case ORANGE: 
            return GREEN
        default: 
            return RED
    }
  }
  render(){
    const {currentcolor} = this.state
    return (
      <div className="App">
       <Trafficlight currentcolor = {currentcolor}/>
      </div>
    );
  }
}

export default App;
