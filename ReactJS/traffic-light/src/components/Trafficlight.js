import React, { Component } from 'react';
import './Trafficlight.css'
var classNames = require('classnames');



const RED = 0
const ORANGE = 1 
const GREEN = 2


class Trafficlight extends Component {
    render(){
        const {currentcolor} = this.props
        return <div className="Trafficlight">
            <div className={classNames("bulb","red", {"active" : currentcolor === RED})}></div>
            <div className={classNames("bulb","orange", {"active" : currentcolor === ORANGE})}></div>
            <div className={classNames("bulb","green", {"active" : currentcolor === GREEN})}></div>
        </div>
    }
}
export default Trafficlight