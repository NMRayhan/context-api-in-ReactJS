import React, { useContext } from 'react';
import { categoryContext } from '../../App';

const Deep = () => {
    const [count] = useContext(categoryContext)

    return (
        <div>
            <h1>This is Deep Page</h1>
            <h3>Count : {count}</h3>
        </div>
    );
};

export default Deep;