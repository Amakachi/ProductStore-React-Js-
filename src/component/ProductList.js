import React, { Component } from "react";
import Product from "./Product";
import Title from "./Title";
import { storeProducts } from "../data";
import { ProductConsumer } from "../context";
import axios from 'axios';

export default class ProductList extends Component {
  state = {
    products: []
  };

  componentDidMount(){
    this._getAllCollections();
  }

  _getAllCollections = () => {
    axios.get(`${process.env.REACT_APP_BACKEND_BASE_URL}/collections`)
    .then(function (response) {
      let collections = response.data
      console.log(collections)
      this.setState({products: collections})
    }.bind(this)).catch(error=>{this.setState({
      errorMessage: "Something went wrong with this page",
      displayError: true,
    })});
  }
  
  render() {
    return (
      <React.Fragment>
        <div className="py-5">
          <div className="container">
            <Title name="our" title="products"></Title>
            <div className="row">
              <ProductConsumer>
                {value => {

                  return this.state.products.map(product => {
                    return <Product key={product.id} product={product} />;
                  });
                }}
              </ProductConsumer>
            </div>
          </div>
        </div>
      </React.Fragment>
      //Product
    );
  }
}
