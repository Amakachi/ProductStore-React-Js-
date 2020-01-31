import React, { Component } from 'react';
import {Switch, Route} from 'react-router-dom';
import  Logo from "./logo.svg";
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from "./component/Navbar"
import ProductList from './component/ProductList';
import Details from './component/Details';
import Default from './component/Default';
import AddProduct from './component/AddProduct'


class App extends Component {
  render() {
    return (
      <React.Fragment>
        <Navbar></Navbar>
        
        <Switch>
          <Route exact path="/" component={ProductList}></Route>
          <Route path="/details" component={Details}></Route>
          <Route path="/addProduct" component={AddProduct}></Route>
          <Route  component={Default}></Route>
          </Switch> 
      </React.Fragment>
    );
  }
}


export default App;
