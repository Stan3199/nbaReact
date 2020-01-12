import React, { Component } from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import './style.css';

class Games extends Component {
    state = { 
        items: [],
        isloaded: false,
        show: false,
        selitem :{}
     }
     
     handleClose = () => {
        this.setState({show:false});
    }
    handleShow = (x) => 
    {
        this.setState({show:true, selitem:x});
    

    }

     componentDidMount()
     {
        fetch('https://www.balldontlie.io/api/v1/games')
        .then(res => {
            return res.json();
        })
        .then(dat => {
            this.setState({ items: dat.data, isloaded:true })
        });
       
     }

     handleDate = (str) =>
     {
        var d = new Date(str);
        return d.toDateString();
     }

     handleTime = (str) =>
     {
         var d = new Date(str);
         return d.toLocaleTimeString();
     }
    render() { 
        var { items,isloaded } = this.state;
        
        
        if(!isloaded)
            return <h3 align="center">Loading...</h3>
        
        return ( 
            <div><ul>{items.map(item => (
            <li key={item.id} onClick={() => this.handleShow(item)}  >
            {this.handleDate(item.date)}
            <br />
            <span>{this.handleTime(item.date)}</span></li>))}
    </ul>
                    
                
                <Modal size="lg" show={this.state.show} onHide={this.handleClose}>
        <Modal.Header closeButton>
          <center><h1>Game Description</h1></center>  <br/>
          {this.handleDate(this.state.selitem.date)} (  {this.handleTime(this.state.selitem.date)}  )
        </Modal.Header>
        <Modal.Body>
            <h2>HOME TEAM</h2>
            {this.state.selitem.home_team ? this.state.selitem.home_team.full_name : null}({this.state.selitem.home_team ? this.state.selitem.home_team.abbreviation : null})  <br/>
            City: {this.state.selitem.home_team ? this.state.selitem.home_team.city : null} <br/>
            Conference: {this.state.selitem.home_team ? this.state.selitem.home_team.conference : null} <br/>
            Division: {this.state.selitem.home_team ? this.state.selitem.home_team.division : null} <br/>
            Home team score: {this.state.selitem.home_team_score} <br/>
            <br/>
            <br/>
            <h2>VISITER TEAM</h2>
            {this.state.selitem.visitor_team ? this.state.selitem.visitor_team.full_name : null}({this.state.selitem.visitor_team ? this.state.selitem.visitor_team.abbreviation : null})  <br/>
            City: {this.state.selitem.visitor_team ? this.state.selitem.visitor_team.city : null} <br/>
            Conference: {this.state.selitem.visitor_team ? this.state.selitem.visitor_team.conference : null} <br/>
            Division: {this.state.selitem.visitor_team ? this.state.selitem.visitor_team.division : null} <br/>
            Visitor team score: {this.state.selitem.visitor_team_score} <br/>
            
            </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={this.handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
                
                </div>
         );
    }
}



 
export default Games;