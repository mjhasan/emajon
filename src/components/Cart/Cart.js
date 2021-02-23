import React from 'react';
import { Link } from 'react-router-dom';

const Cart = (props) => {
    const cart = props.cart;
    console.log(cart);
    let total = 0;
    for (let i = 0; i < cart.length; i++) {
        const product = cart[i];
       
        total = total + product.price * product.quantity;
    }

    let shipping = 0;
    if (total > 500) {
        shipping = 0;
    }

    else if (total < 500 && cart.length > 0) {
        shipping = 6.99;
    }

    const tax = total/10

    const grandTotal = total+shipping+tax;

    return (
        <div>
            <h3>Order Summery</h3>
            <h5>Item Ordered: {cart.length}</h5>
            <p>Shipping : {shipping.toFixed(2)}</p>
            <p>Tax + VAT : {tax.toFixed(2)}</p>
            <p>Total Price : {grandTotal.toFixed(2)}</p>
            <br/>
            <Link to="/review"><div className="add-to-cart">Review Order</div></Link>
        </div>
    );
};

export default Cart;