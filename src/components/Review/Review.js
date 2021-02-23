import React, { useEffect, useState } from 'react';
import fakeData from '../../fakeData';
import { getDatabaseCart, removeFromDatabaseCart } from '../../utilities/databaseManager';
import Cart from '../Cart/Cart';
import ReviewItems from '../ReviewItems/ReviewItems';

const Review = () => {
    const [cart, setCart] = useState([])
    const removeFromCart = (productKey) => {
        const updateCart = cart.filter(pd => pd.key !== productKey)
        setCart(updateCart);
        removeFromDatabaseCart(productKey);
    }
    useEffect(() => {
        // cart
        const saveCart = getDatabaseCart();
        const productKey = Object.keys(saveCart);

        const cartProducts = productKey.map(key => {
            const product = fakeData.find(pd => pd.key === key);
            product.quantity = saveCart[key];
            return product;
        });
        setCart(cartProducts)
    }, [])

    return (

        <>
            <h2>Cart Items : {cart.length}</h2>
            <div className="main">

                <div className="products">
                    {
                        cart.map(product => <ReviewItems removeFromCart={removeFromCart} product={product} key={product.key}></ReviewItems>)
                    }
                </div>
                <div className="cart">
                    <Cart cart={cart}></Cart>
                </div>
            </div>        </>
    );
};

export default Review;