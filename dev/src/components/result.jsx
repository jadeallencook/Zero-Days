import React, { Component } from 'react';
import * as exploits from '../json/exploits.json';
import '../styles/result.css';

class Result extends Component {

    open(uid) {
        this.props.selectExploit(uid);
    }

    render() {
        let key = this.props.exploit,
            exploit = exploits[this.props.exploit];
        return (
            <div className="result">
                <h4 className="title">{exploit.name} ({exploit.date})</h4>
                <p className="description">{exploit.description}</p>
                <button className="view" onClick={(e) => this.open(key)}>Discover Exploits</button>
            </div>
        );
    }
}

export default Result;