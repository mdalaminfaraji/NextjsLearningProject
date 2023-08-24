import React from 'react';

const SingleProduct = ({product}) => {
    const {id, title, price}=product;
    return (
        <div>
            {title}
        </div>
    );
};

export default SingleProduct;