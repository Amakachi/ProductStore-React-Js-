import React, { Component } from 'react';
import  Logo from "./logo.svg";
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';


class App extends Component {
  render() {
    return (
      <div className="container-fluid">
        <div className="row">
          <div className="col-sm-6">Column number one</div>
          <div className="col-sm-6">
            <span>
              <i className="fas fa-home" />
            </span>
          </div>
        </div>
      </div>
    );
  }
}


export default App;
