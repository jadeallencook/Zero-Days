import React, { Component } from 'react';
import Navbar from './components/navbar';
import Exploit from './components/exploit';
import Footer from './components/footer';
import './App.css';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      uid: null
    };
  }

  exploitSelected(uid) {
    this.setState({
      uid: uid
    });
  }

  render() {
    return (
      <div className="wrapper">
        <Navbar uid={this.state.uid} selectExploit={this.exploitSelected.bind(this)} />
        <Exploit uid={this.state.uid} selectExploit={this.exploitSelected.bind(this)} />
        <Footer />
      </div>
    );
  }
}

export default App;
