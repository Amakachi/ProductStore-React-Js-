import React, { Component } from "react";
import { storeProducts, detailProduct } from "./data";
import Product from "./component/Product";
import axios from 'axios';

const ProductContext = React.createContext();
// Provider

//Consumer
class ProductProvider extends Component {
  state = {
    products: [],
    detailProduct: detailProduct,
    cart: []
  };
  componentDidMount() {
    this.setProducts();
  }
  setProducts = () => {
    let tempProducts = [];
    storeProducts.forEach(item => {
      const singleItem = {...item};
      tempProducts = [...tempProducts, singleItem]
    })
      this.setState(() => {
        return {products : tempProducts};
      });
  };

  getItem = id => {
      const product = this.state.products.find(item => item.id === id);
      return product;
  }

  handleDetail = id => {
    // const product = this.getItem(id);
    // this.setState(() => {
    //   return {detailProduct:product}
    // })
    axios.get(`${process.env.REACT_APP_BACKEND_BASE_URL}/collections/${id}`)
      .then(function (response) {
        let collection = response.data
        this.setState(() => {
          return {
            detailProduct: collection,
          }
        })
      }.bind(this)).catch(error=>{this.setState({
        errorMessage: "Something went wrong with this page",
        displayError: true,
      })});
    
  };
  addToCart = (id) => {
    let tempProducts = [...this.state.products];
    const index = tempProducts.indexOf(this.getItem(id));
    const product = tempProducts[index];
    product.inCart = true;
    product.count = 1;
    const price = product.price;
    product.total = price;
    this.setState(() =>  {
      return {products: tempProducts, cart: [...this.state.cart, product]};
    },
    () => {
      console.log(this.state);
    }
    );
  };
  render() {
    return (
      <ProductContext.Provider
        value={{
          ...this.state,
          handleDetail: this.handleDetail,
          addToCart: this.addToCart
        }}
      >
        {this.props.children}
      </ProductContext.Provider>
    );
  }
}

const ProductConsumer = ProductContext.Consumer;

export { ProductProvider, ProductConsumer };
