import React, { Component } from 'react';
import './style.css';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Tooltip from 'react-bootstrap/Tooltip'

class Teams extends Component {
    state = { 
        items : [],
        isloaded: false,
        page: 1
     }


     componentDidMount()
     {
         this.getData();        
     }


     getData = () =>
     {
         var x = this.state.page;
        fetch("https://www.balldontlie.io/api/v1/teams?page=")
        .then(res => {
            return res.json();
        })
        .then(dat => {
            this.setState({ items: dat.data, isloaded:true })
        });
     }
     renderTooltip = (x) =>
     {
        return <Tooltip {...x}>
            <div>
                {x.full_name}({x.abbreviation})  <br />
                City: {x.city}  <br />
                Conference: {x.conference}  <br />
                Division: {x.division}  <br />

            </div>
        
        
        </Tooltip>;
     }

     handleNext = () =>

     {
        console.log("nextbutton");
        this.getData();
        this.setState({ page: this.state.page+1 })
        
     }

     handlePrev = () =>
     {
        this.getData();
         this.setState({ page: this.state.page-1 })
         
     }

    render() { 
        var { items,isloaded } = this.state;
        if(!isloaded)
            return <h3 align="center">Loading...</h3>

        return ( 
            <div>
                <ul>
                    {items.map(item => (
                        
                        <OverlayTrigger
                        placement="right"
                        delay={{ show: 250, hide: 250 }}
                        overlay={this.renderTooltip(item)}
                       >
                        
                        <li key={item.id}>
                            
                            
                            {item.name} <br />
                            <span>{item.division}</span>
                        
                            
                            
                        </li>
                        </OverlayTrigger>
                    ))}

                </ul>
                

            </div>
         );
    }
}
 
export default Teams;