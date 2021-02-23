import React, { useState } from 'react';
import fakeData from '../../fakeData'
import Cart from '../Cart/Cart';
import Product from '../Product/Product';
import './Shop.css'
import { addToDatabaseCart } from '../../utilities/databaseManager'
const Shop = () => {
    const products = fakeData.slice(0, 10);
    const [product, setProduct] = useState(products);
    const [cart, setCart] = useState([]);

    const handleAddProduct = (product) => {
        const toBeAddedKey = product.key;
        const sameProduct = cart.find(pd => pd.key === toBeAddedKey)
        let count = 1;
        let newCart;
        if (sameProduct) {
            count = sameProduct.quantity + 1
            sameProduct.quantity = count;
            const others = cart.filter(pd => pd.key !== toBeAddedKey);
            newCart = [...others, sameProduct]
        }

        else {
            product.quantity = 1;
            newCart = [...cart, product]
        }
        setCart(newCart);
        addToDatabaseCart(product.key, count);
    }


    return (
        <div className="main">
            <div className="products">
                <ul>
                    {
                        product.map(product => <Product showAddToCart={true} handleAddProduct={handleAddProduct} product={product} key={product.key}></Product>)
                    }
                </ul>
            </div>
            <div className="cart">
                <Cart cart={cart}></Cart>
            </div>
        </div>
    );
};

export default Shop;