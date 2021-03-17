import React, { useContext } from 'react';
import { CategoryContext } from '../../App';

const CategoryList = () => {
    const [Category, setCategory] = useContext(CategoryContext)
    return (
        <div>
            <button onClick={() => setCategory("Mobile")}>Mobile</button>
            <button onClick={() => setCategory("Laptop")}>Laptop</button>
            <button onClick={() => setCategory("Camera")}>Camera</button>
            <hr/>
        </div>
    );
};

export default CategoryList;