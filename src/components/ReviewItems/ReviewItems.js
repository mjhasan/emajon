import React from 'react';

const ReviewItems = (props) => {
    const { name, price, quantity, img, key } = props.product;
    // style
    const flexContainer = { display: 'flex', justifyContent: 'flex-start', borderBottom: '1px solid #ddd' }
    return (
        <div style={{width: '80%', margin: '0 auto'}}>
            <div style={flexContainer}>
                <div className="image" style={{ margin: '10px', padding: '20px' }}>
                    <img src={img} alt="" width="150px" />
                </div>
                <div className="reviewItems" style={{ margin: '10px', padding: '20px' }}>
                    <h4>{name}</h4>
                    <div style={{ display: 'flex' }}>
                        <p style={{ margin: '10px' }}>Quantity: {quantity}</p>
                        <p style={{ margin: '10px' }}>Price: ${price}</p>
                    </div>
                    <button onClick={() =>props.removeFromCart(key)}className="add-to-cart">Remove Item</button>
                </div>
            </div>
        </div>
    );
};

export default ReviewItems;