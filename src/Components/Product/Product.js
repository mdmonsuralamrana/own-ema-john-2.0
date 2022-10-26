import React from 'react';
import './Product.css';

const Product = (props) => {

    const { name, img, price, ratings, seller } = props.product;

    return (
        <div className="product">
            <img src={img} alt="" />
            <div className="product-info">
                <p className="product-name">{name}</p>
                <p>Price: <small className="product-price">${price}</small></p>
                <p>Manufacturer: <small className="manufacturer-name">{seller}</small></p>
                <p>Rating: <span className="fa fa-star checked">{ratings} </span> stars</p>
            </div>
            <button className="add-to-cart-btn">
                Add To Cart
            </button>
        </div>
    );
};

export default Product;