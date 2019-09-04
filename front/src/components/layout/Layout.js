import React, { Component } from 'react'
import './Footer.css'


export class Layout extends Component {
    
    render() {
        const logofooter = '../logo.jpg';
        return (
            <div>
               <img src={logofooter}/>
            </div>
        )
    }
}

export default Layout;
