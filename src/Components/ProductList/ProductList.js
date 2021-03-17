import React, { useContext, useEffect, useState } from 'react';
import { CategoryContext } from '../../App';
import ProductDetails from '../ProductDetails/ProductDetails';


const AllProduct = [
    { name: "DCL", category: "Laptop" }, { name: "HP", category: "Laptop" }, { name: "ASUS", category: "Laptop" },
    { name: "Apple", category: "Mobile" }, { name: "Samsung", category: "Mobile" }, { name: "Nokia", category: "Mobile" },
    { name: "Nikon", category: "Camera" }, { name: "Panasonic", category: "Camera" }, { name: "Canon", category: "Camera" },
]

const ProductList = () => {
    const [Category] = useContext(CategoryContext)
    const [Products, setProducts] = useState([])

    useEffect(() => {
        const MatchedProduct = AllProduct.filter(pd => pd.category === Category && Category.toLowerCase() )
        setProducts(MatchedProduct)
    }, [Category])
    return (
        <div>
        <h1>Product Details</h1>
            {
                Products.map(pd => <ProductDetails pd={pd}></ProductDetails>)
            }
        </div>
    );
};

export default ProductList;