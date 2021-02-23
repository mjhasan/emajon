import React from 'react';
import './Product.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee, faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom';

const Product = (props) => {
    const { name, price, img, stock, seller, key } = props.product
    return (
        <div className="product-container">
            <div className="product-image">
                <img src={img} alt="" />
            </div>
            <div className="product-info">
                <h4> <Link to={"/product/"+key}>{name}</Link> </h4>
                <p><small>By : {seller}</small></p>
                <p>${price}</p>
                <p>Only {stock} left in stock</p>
                {props.showAddToCart && <button onClick={(() => props.handleAddProduct(props.product))} className="add-to-cart"><FontAwesomeIcon icon={faShoppingCart} /> add to cart</button>}
            </div>
        </div>
    );
};

export default Product;