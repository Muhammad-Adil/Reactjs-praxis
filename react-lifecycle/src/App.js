import React, { Component } from 'react';

import ReactLifecycleComponent from './component/react-lifecycle';

import logo from './logo.svg';
import './App.css';

class App extends Component {
 /**
  constructor(props){
    super(props);
  }
  **/
  render() {
    return (
      <div className="App">
        <ReactLifecycleComponent/>

        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>

        <div className="abc">
          <ReactLifecycleComponent/>
        </div>
      </div>
    );
  }
}

export default App;
