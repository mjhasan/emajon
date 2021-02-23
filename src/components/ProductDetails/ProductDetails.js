import React from 'react';
import { useParams } from 'react-router-dom';
import fakeData from '../../fakeData';
import Product from '../Product/Product';

const ProductDetails = () => {
    const {productKey} = useParams();
    const data = fakeData;
    const product = data.find(x => x.key === productKey);
    console.log(product);
    return (
        <div>
            <Product showAddToCart={false} product={product} ></Product>            
        </div>
    );
};

export default ProductDetails;