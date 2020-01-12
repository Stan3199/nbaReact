import React, { Component } from 'react';
import Nav from 'react-bootstrap/Nav';
import './button.css';
import Button from 'react-bootstrap/Button'
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import ToggleButtonGroup from 'react-bootstrap/ToggleButtonGroup';
import ToggleButton from 'react-bootstrap/ToggleButton'
import Games from './Games';
import Teams from './Teams';


class Button1 extends Component {
    state = {  }
    render() { 
        return ( 
            <Router>
            <div>

            

            <Button className="btngrp1" variant="outline-primary" toggle href="/teams">NBA Teams</Button>
            <Button  className="btngrp1" variant="outline-primary" href="/games">NBA Games</Button>
            
            </div>
            <Route path="/teams" component={Teams}/>
            <Route path="/games" component={Games}/>
            
            </Router>
         );
    }
}
 
export default Button1;