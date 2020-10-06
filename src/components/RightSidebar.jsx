import React, { Component } from 'react';
import './RightSidebar.css'

class RightSidebar extends Component {
    render() {
        let github = "https://github.com/miketaart";
        let linkedIn = "https://www.linkedin.com/in/michael-ta-3796756a/";
        let email  = "mailto: h.michael.ta@gmail.com";
        return (
            <div className="rightSidebar">
                <ul>
                    <li><a href = {github} target="_blank" rel="noopener noreferrer">GITHUB</a></li>
                    <li><a href = {linkedIn} target="_blank" rel="noopener noreferrer">LINKEDIN</a></li>
                    <li><a href = {email} target="_blank" rel="noopener noreferrer">H.MICHAEL.TA@GMAIL.COM</a></li>
                </ul>
            </div>
        );
    }
}

export default RightSidebar;