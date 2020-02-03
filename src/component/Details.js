import React, { Component } from 'react';
import {ProductConsumer} from '../context';
import {Link} from 'react-router-dom';
import {ButtonContainer} from './Button';

export default class  extends Component {
    render() {
        return (
            <ProductConsumer>
                {(value) => {
                console.log(value.detailProduct)
                const {_id, name, image, category,  price, description, title, color} = value.detailProduct;
                const photo = `${process.env.REACT_APP_BACKEND_UPLOAD_DIRECTORY}/${image}`
                return (
                    <div className="container py-5">
                        {/* title */}
                        <div className="row">
                            <div className="col-10 mx-auto-center text-slanted text-blue my-5">
                <h1>{title}</h1>
                            </div>
                        </div>
                        {/* end title */}
                        {/* Product Info */}
                        <div className="row">
                            <div className="col-10 mx-auto col-md-6 my-3 ">
                                <img src={image} className="img-fluid" alt="product "></img>
                            </div>
                            {/* Product Text */}
                            <div className="col-10 mx-auto col-md-6 my-3 text-capitalize">
                <h2>Name: {name}</h2>
                <h4 className="text-tile text-uppercase text-muted mt-3 mb-2">
                Category: <span className="text-uppercase ">{category}</span>
                </h4>
                <h4 className="text-blue"><strong>
                price: <span>$</span>{price}</strong></h4>
                <p className="text-capitalize font-weight-bold mt-3 mb-0">some info about product: </p>
                <p className="text-muted lead">{description}</p>
                <h4 className="text-blue"><strong>
                Color: {color}</strong></h4>
                
                <div>
                <Link to="/">
                <ButtonContainer>
                       Back to product
                   </ButtonContainer>
                   </Link> 
                    {/*<ButtonContainer cart disabled={inCart ? true : false} onClick={() => {value.addToCart(_id); }}>*/}

                   {/*    {inCart? "inCart" : "add to Cart"}*/}
                   {/*</ButtonContainer>*/}
                </div>
                            </div>
                        </div>
                    </div>
                );
                }}
            </ProductConsumer>
        )
    }
}
