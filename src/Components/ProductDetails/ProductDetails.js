import React from 'react';

const ProductDetails = (props) => {
    const { name, category } = props.pd
    console.log(name, category);
    return (
        <div>
            <h3>Name : {name}</h3>
            <h3>Category : {category}</h3>
        </div>
    );
};

export default ProductDetails;