import React, { Component } from 'react';
import './App.css';
import Login from "./pages/login";

class App extends Component {
  render() {
    return (
      <div>
        {this.props.children}
      </div>
    );
  }
}

export default App;

