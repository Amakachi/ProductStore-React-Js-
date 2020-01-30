import React, { Component } from "react";
import styled from "styled-components";
import ImageUpload from "./ImageUpload";
import { storeProducts } from "../data";
import { Link } from "react-router-dom";


export default class AddProduct extends Component {
    state = {
            id: null,
            title: null ,
            img: null,
            price: 10,
            company: "GOOGLE",
            info:"Lorem ipsum dolor amet offal butcher quinoa sustainable gastropub, echo park actually green juice sriracha paleo. Brooklyn sriracha semiotics, DIY coloring book mixtape craft beer sartorial hella blue bottle. Tote bag wolf authentic try-hard put a bird on it mumblecore. Unicorn lumbersexual master cleanse blog hella VHS, vaporware sartorial church-key cardigan single-origin coffee lo-fi organic asymmetrical. Taxidermy semiotics celiac stumptown scenester normcore, ethical helvetica photo booth gentrify.",
            inCart: false,
            count: 0,
            total: 0
    }

    handleFormSubmit = () => {
        // validations
        storeProducts.push(this.state)
        console.log(storeProducts)
    
    }

  render() {
    return (
      <>
        <ImageWrapper>
          <div className="container">
            <div className="card">
              <div className="row">
                <div className="col-md-6">
                  <h3> Image Preview and Upload Component</h3>
                  <div id="mainApp"></div>
                  <div className="centerText">
                    <span>Checkout associated </span>
                    <ImageUpload />

                  </div>
                </div>
                <div className="col-md-6">
                  <form>
                    <div className="form-group-row ">
                      <div className="col regform">
                      <label for="InputName">Name of product: </label>
                        <input
                          type="text"
                          className="form-control"
                          id="exampleInputName"
                          placeholder="Name"
                          onChange={(e) => this.setState({title: e.target.value})}
                          value={this.state.title}
                        />
                      </div>
                      <div className="col regform">
                      <label for="InputDes">Description of product: </label>
                        <input
                          type="text"
                          className="form-control"
                          id="InputDes"
                          placeholder="Description"
                          onChange={(e) => this.setState({title: e.target.info})}
                          value={this.state.info}
                        />
                      </div>
                      <div className="col regform">
                      <label for="InputPrice">Price: </label>
                        <input
                          type="text"
                          className="form-control"
                          id="InputPrice"
                          placeholder="Price"
                          onChange={(e) => this.setState({title: e.target.price})}
                          value={this.state.price}
                        />
                      </div>
                      <div className="col regform">
                      <label for="InputCat">Product category: </label>
                        <input
                          type="text"
                          className="form-control"
                          id="InputCat"
                          placeholder="Category"
                          onChange={(e) => this.setState({title: e.target.company})}
                          value={this.state.company}
                        />
                      </div>
                      <div className="col regform">
                      <label for="InputColor">Product color: </label>
                        <input
                          type="text"
                          className="form-control"
                          id="InputColor"
                          placeholder="Color"
                          onChange={(e) => this.setState({title: e.target.color})}
                          value={this.state.color}
                        />
                      </div>
                      <Link to='/details' className="ml-auto">
                      <button
                        type="button"
                        //onClick={this.handleFormSubmit}
                        className="btn btn-success"
                        data-toggle="modal"
                        data-target="#exampleModal"
                      >
                        Register
                      </button>
 
                    </Link>
                      
                      <div
                        className="modal fade"
                        id="exampleModal"
                        role="dialog"
                        aria-labelledby="exampleModalLabel"
                        aria-hidden="true"
                      >
                        <div className="modal-dialog" role="document">
                          <div className="modal-content">
                            <div className="modal-header">
                              <h5
                                className="modal-title"
                                id="exampleModalLabel"
                              >
                                Registeration successful!!!
                              </h5>
                              <button
                                type="button"
                                className="close"
                                data-dismiss="modal"
                                aria-label="Close"
                              >
                                <span aria-hidden="true">&times;</span>
                              </button>
                            </div>
                            <div className="modal-body">
                              <p>Thank you for registering with us </p>
                            </div>
                            <div className="modal-footer">
                              <button
                                type="button"
                                className="btn btn-secondary"
                                data-dismiss="modal"
                              >
                                Close
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </ImageWrapper>
      </>
    );
  }
}

const ImageWrapper = styled.div`
  h3 {
    margin-left: 15px;
  }

  .centerText {
    text-align: center;
    width: 500px;
  }
  .card {
    padding: 3rem 3rem;
  }
  .regform{
    padding: 10px 20px;
}
.container{
    padding-top: 4rem;
}
`;
