import React, { Component } from 'react';
import '../styles/navbar.css';
import * as exploits from '../json/exploits.json';

class Navbar extends Component {

    showAllExploits() {
        this.props.selectExploit(null);
    }

    render() {
        if (!this.props.uid) {
            return (
                <div>
                    <h1 className="header">Zero Days</h1>
                    <p className="def"><b>Zero Day [0 Day] - </b>Computer-software vulnerability unknown to the webmasters that hackers exploit to adversely affect computer programs, data, additional computers or a network.</p>
                    <span className="link">All Exploits </span>/ Select Below
                </div>
            );
        } else {
            const exploit = exploits[this.props.uid];
            return (
                <div>
                    <h1>{exploit.name}</h1>
                    <p className="def">{exploit.description}</p>
                    <span className="link" onClick={this.showAllExploits.bind(this)}>All Exploits</span> / <span className="link">{exploit.name}</span>
                </div>
            );
        }
    }
}

export default Navbar;